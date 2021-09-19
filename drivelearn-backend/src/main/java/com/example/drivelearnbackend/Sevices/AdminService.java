package com.example.drivelearnbackend.Sevices;


import com.example.drivelearnbackend.Controllers.DTO.AdminDTO;
import com.example.drivelearnbackend.Controllers.DTO.EmployeeDTO;
import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Repositories.*;
import com.example.drivelearnbackend.Repositories.Entity.*;
import com.example.drivelearnbackend.Sevices.Support.HashMD5;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminRepository AdminRepository;

    @Autowired
    private EmployeeRepository repository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private UserRepository userRepository;


    public void addAdmin(AdminDTO dto) {
        System.out.println("before the branch search");
        String pass = "";
        try {
            pass = new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        List<Employee> EmployeeList = new ArrayList<>();
//          MyAdminRepository.save(new MyAdmin(dto.getAdminId(), dto.getName(),dto.getUsername(),pass));
        AdminRepository.save(new Admin(dto.getName(), pass, dto.getUsername()));
    }

    public EmployeeDTO loginEmployee(EmployeeDTO dto) {
        String password = "";
        String branchName = "";
        int branchId = 0;
        int role;
        Branch branch = null;
        try {
            password = new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        LinkedList<Employee> list = repository.findByUsernameAndPassword(dto.getUsername(), password);


        EmployeeDTO loginEmployee = null;
        if(list.isEmpty()){

          loginEmployee =    new EmployeeDTO(null, null, 0);
        }else{

            Employee employee=null;
            for (Employee newemployee : list) {
                 employee = newemployee;
            }
            if(employee.getIsActive()==2){
                branch = employee.getBranch();
                branchName = branch.getBranchName();
                branchId = branch.getBranchid();

                  loginEmployee = new EmployeeDTO(employee.getUsername(), employee.getPassword(), employee.getRole(),branchName,branchId,employee.getEmpid());
            } else{
                 loginEmployee =    new EmployeeDTO(null, null, 0);
            }

        }



        return  loginEmployee;

    }

    public LinkedList<StudentDTO> getAllStudents() {
        String branchId = null;

        int count = 0;
        Branch branch = null;
        LinkedList<Student> list = studentRepository.findAll();
        LinkedList<StudentDTO> studentlist = new LinkedList<>();
        for (Student student:list) {
          branch = student.getBranch();

          if(branch == null){
              branchId = "nan";
          }else{
              branchId =branch.getBranchName();
          }

          if(student.getName() != null){
              count = count+1;
          }else{

          }

            studentlist.add(new StudentDTO(student.getName(),student.getAddress(),student.getIdnum(),student.getContact(),branchId,student.getUsername(),student.getDob(),student.getStuId(),count));
        }
        return studentlist;
    }

    public StudentDTO getStudent(int id){
        String branchId = null;
        Branch branch = null;
        LinkedList<Student> list= studentRepository.findByStuId(id);

        Student student=null;
        for (Student newStudent : list) {
            student = newStudent;
        }

        branch = student.getBranch();
        if(branch == null){
            branchId = "nan";
        }else{
            branchId =branch.getBranchName();
        }

        return  new StudentDTO(student.getName(),student.getAddress(),student.getIdnum(),student.getContact(),branchId,student.getUsername(),student.getDob(),student.getStuId(),0);
    }

    public LinkedList<EmployeeDTO> getAllEmployee(){
        String branchId = null;

        int count = 0;
        Branch branch = null;
        LinkedList<Employee> list = repository.findAllByRoleAndIsActive(1, 2);
        LinkedList<EmployeeDTO> employeelist = new LinkedList<>();
        for (Employee employee:list) {
            branch = employee.getBranch();

            if(branch == null){
                branchId = "nan";
            }else{
                branchId =branch.getBranchName();
            }

            if(employee.getFullName() != null){
                count = count+1;
            }else{

            }
            employeelist.add(new EmployeeDTO(employee.getEmpid(), employee.getMoNumber(),employee.getFullName(),employee.getNid(), branchId,count,employee.getRegisteredDate()));

        }
        return employeelist;
    }

    public LinkedList<EmployeeDTO> getdeactiveEmployee(){
        String branchId = null;

        int count = 0;
        Branch branch = null;
        LinkedList<Employee> list = repository.findAllByIsActive(1);
        LinkedList<EmployeeDTO> employeelist = new LinkedList<>();
        for (Employee employee:list) {
            branch = employee.getBranch();

            if(branch == null){
                branchId = "nan";
            }else{
                branchId =branch.getBranchName();
            }

            if(employee.getFullName() != null){
                count = count+1;
            }else{

            }
            employeelist.add(new EmployeeDTO(employee.getEmpid(), employee.getMoNumber(),employee.getFullName(),employee.getNid(), branchId,count,employee.getRegisteredDate()));

        }
        return employeelist;
    }

    public EmployeeDTO getEmployee(int id){
        String branchId = null;
        Branch branch = null;

        LinkedList<Employee> list= repository.findByEmpid(id);



        Employee employee=null;
        for (Employee newemployee : list) {
            employee = newemployee;
        }

        branch = employee.getBranch();
        if(branch == null){
            branchId = "nan";
        }else{
            branchId =branch.getBranchName();
        }

        return  new EmployeeDTO(employee.getEmpid(), employee.getMoNumber(),employee.getFullName(),employee.getNid(), branchId,0,employee.getRegisteredDate());
    }

    public  LinkedList<StudentDTO> getSearchStudent(StudentDTO dto){
        String branchId = null;
        int count = 0;
        Branch branch = null;
        LinkedList<Student> list = new LinkedList<>();
        if(dto.getName() == ""){
            list = studentRepository.findAll();
        }else{
            list = studentRepository.searchByUsernam(dto.getName());
        }
        LinkedList<StudentDTO> studentlist = new LinkedList<>();
        for (Student student:list){
            branch = student.getBranch();

            if(branch == null){
                branchId = "nan";
            }else{
                branchId =branch.getBranchName();
            }

            if(student.getName() != null){
                count = count+1;
            }else{

            }
            studentlist.add(new StudentDTO(student.getName(),student.getAddress(),student.getIdnum(),student.getContact(),branchId,student.getUsername(),student.getDob(),student.getStuId(),count));
        }
            return studentlist;
    }

    public LinkedList<EmployeeDTO> getAllTrainer(){
        String branchId = null;

        int count = 0;
        Branch branch = null;
        LinkedList<Employee> list = repository.findAllByRoleAndIsActive(2, 2);
        LinkedList<EmployeeDTO> employeelist = new LinkedList<>();
        for (Employee employee:list) {
            branch = employee.getBranch();

            if(branch == null){
                branchId = "nan";
            }else{
                branchId =branch.getBranchName();
            }

            if(employee.getFullName() != null){
                count = count+1;
            }else{

            }
            employeelist.add(new EmployeeDTO(employee.getEmpid(), employee.getMoNumber(),employee.getFullName(),employee.getNid(), branchId,count,employee.getRegisteredDate()));

        }
        return employeelist;
    }

    public LinkedList<EmployeeDTO> getBranchTrainer(String branchName){
        String branchId = null;

        int count = 0;
        Branch branch = null;
        LinkedList<Employee> list = repository.findAllByRoleAndIsActive(2, 2);
        LinkedList<EmployeeDTO> employeelist = new LinkedList<>();
        for (Employee employee:list) {
            branch = employee.getBranch();

            if(branch == null){
                branchId = "nan";
            }else{
                branchId =branch.getBranchName();
            }

            if(employee.getFullName() != null){
                count = count+1;
            }else{

            }
            if(branchName.equals(branchId)){
                employeelist.add(new EmployeeDTO(employee.getEmpid(), employee.getMoNumber(),employee.getFullName(),employee.getNid(), branchId,count,employee.getRegisteredDate()));
            }


        }
        return employeelist;
    }

    public  LinkedList<EmployeeDTO> getSearchEmployee(EmployeeDTO dto){
        String branchId = null;
        int count = 0;
        Branch branch = null;
        LinkedList<Employee> list = new LinkedList<>();
        if(dto.getFullName() == ""){
            list = repository.findAllByRoleAndIsActive(1, 2);
        }else{
            list = repository.searchByUsernam(dto.getFullName());
        }
        LinkedList<EmployeeDTO> employeelist = new LinkedList<>();
        for (Employee employee:list) {
            branch = employee.getBranch();

            if(branch == null){
                branchId = "nan";
            }else{
                branchId =branch.getBranchName();
            }

            if(employee.getFullName() != null){
                count = count+1;
            }else{

            }
            employeelist.add(new EmployeeDTO(employee.getEmpid(), employee.getMoNumber(),employee.getFullName(),employee.getNid(), branchId,count,employee.getRegisteredDate()));

        }
        return employeelist;
    }

    public  LinkedList<EmployeeDTO> getSearchTrainer(EmployeeDTO dto){
        String branchId = null;
        int count = 0;
        Branch branch = null;
        LinkedList<Employee> list = new LinkedList<>();
        if(dto.getFullName() == ""){
            list = repository.findAllByRoleAndIsActive(2, 2);
        }else{
            list = repository.searchByTrainerUsernam(dto.getFullName());
        }
        LinkedList<EmployeeDTO> employeelist = new LinkedList<>();
        for (Employee employee:list) {
            branch = employee.getBranch();

            if(branch == null){
                branchId = "nan";
            }else{
                branchId =branch.getBranchName();
            }

            if(employee.getFullName() != null){
                count = count+1;
            }else{

            }
            employeelist.add(new EmployeeDTO(employee.getEmpid(), employee.getMoNumber(),employee.getFullName(),employee.getNid(), branchId,count,employee.getRegisteredDate()));

        }
        return employeelist;
    }

    public String addNewStudent(StudentDTO dto){
        String error = "";
        String pass = "";
        LinkedList<Student> username = new LinkedList<>();
        LinkedList<Student> password = new LinkedList<>();

        try {
            pass=new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        List<StuSession> stuSessionList=new ArrayList<>();
        List<Feedback> feedbacks=new ArrayList<>();
        List<Cource> courceList=new ArrayList<>();
        List<Payment> paymentList=new ArrayList<>();
        List<VechileType> vechileTypes=new ArrayList<>();
        LocalDate todayregisterDate = LocalDate.now();
        Branch branch = branchRepository.findBranchByBranchName(dto.getBranch());
        username = studentRepository.findByUsername(dto.getUsername());
        password = studentRepository.findByPassword(pass);

        if(username.isEmpty() && !dto.getBranch().isEmpty()){
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            String date = dto.getSdob();
            LocalDate localDate = LocalDate.parse(date, formatter);

            Student student=studentRepository.save(new Student(dto.getName(), todayregisterDate, dto.getNid(), dto.getAddress(), localDate, dto.getUsername(),pass, dto.getContact(), feedbacks, branch, stuSessionList, courceList, paymentList, vechileTypes));

            LinkedList<UserReceiveNotification> userReceiveNotifications=new LinkedList<>();
            LinkedList<Notification> sentMessage=new LinkedList<>();


            User user=userRepository.save(new User(student.getStuId(), 3, dto.getUsername(), userReceiveNotifications,sentMessage));

            error = "Added Successfully";

        }else{

            error = "Invalid Username";
        }


        return error;
    }


    public String addNewInstructor(EmployeeDTO dto){
        String pass="";
        int roleType;
        int role;
        String error = "";
        LinkedList<Employee> username = new LinkedList<>();
        LinkedList<Employee> password = new LinkedList<>();
        try {
            pass=new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        roleType = dto.getRole();
        if(roleType == 4){
            role = 4;
        }else{
            role = dto.getRole();
        }


        String isActive = "2";

        List<Installment> installmentList=new ArrayList<>();
        List<Session> trainersSessionList=new ArrayList<>();
        List<Session> assinersSessionList=new ArrayList<>();
        LocalDate todayregisterDate = LocalDate.now();
        Branch branch = branchRepository.findBranchByBranchName(dto.getBranch());
        username = repository.findByUsername(dto.getUsername());
        password = repository.findByPassword(pass);



        if(username.isEmpty() && !dto.getBranch().isEmpty()){
            repository.save(new Employee(dto.getMoNumber(),null, role, dto.getFullName(), dto.getNid(), 1, dto.getUsername(), pass, todayregisterDate, null, branch, installmentList, trainersSessionList, assinersSessionList ));
            error = "Added Successfully";

        }else{

            error = "Invalid Username";
        }
        return  error;
    }

    public String addNewInstructorByManager(EmployeeDTO dto){
        String pass="";
        int roleType;
        int role;
        String error = "";
        LinkedList<Employee> username = new LinkedList<>();
        LinkedList<Employee> password = new LinkedList<>();
        try {
            pass=new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        roleType = dto.getRole();
        if(roleType == 4){
            role = 4;
        }else{
            role = dto.getRole();
        }


        String isActive = "1";

        List<Installment> installmentList=new ArrayList<>();
        List<Session> trainersSessionList=new ArrayList<>();
        List<Session> assinersSessionList=new ArrayList<>();
        LocalDate todayregisterDate = LocalDate.now();
        Branch branch = branchRepository.findBranchByBranchName(dto.getBranch());
        username = repository.findByUsername(dto.getUsername());
        password = repository.findByPassword(pass);



        if(username.isEmpty() && !dto.getBranch().isEmpty()){
            repository.save(new Employee(dto.getMoNumber(),null, role, dto.getFullName(), dto.getNid(), 1, dto.getUsername(), pass, todayregisterDate, null, branch, installmentList, trainersSessionList, assinersSessionList ));
            error = "Added Successfully";

        }else{

            error = "Invalid Username";
        }
        return  error;
    }

    public EmployeeDTO getSettingProfile(String username){
        String branchId = null;
        Branch branch = null;

        LinkedList<Employee> list= repository.findByUsername(username);



        Employee employee=null;
        for (Employee newemployee : list) {
            employee = newemployee;
        }

        branch = employee.getBranch();
        if(branch == null){
            branchId = "nan";
        }else{
            branchId =branch.getBranchName();
        }

        return  new EmployeeDTO(employee.getEmpid(), employee.getMoNumber(),employee.getFullName(),employee.getNid(), branchId,0,employee.getRegisteredDate());
    }

    public String updateStudent(StudentDTO dto){
        String error = "";
        int branchId =0 ;

        LinkedList<Student> list= studentRepository.findByStuId(dto.getStuID());

        Student student=null;
        for (Student newstudent : list) {
            student = newstudent;
        }

        Branch branch = branchRepository.findBranchByBranchName(dto.getBranch());
//        if(!dto.getPassword().isEmpty() && !dto.getP().isEmpty() &&  !dto.getBranch().isEmpty())

        if(!dto.getAddress().isEmpty() && !dto.getName().isEmpty() &&  !dto.getBranch().isEmpty() && !dto.getContact().isEmpty()){
            student.setAddress(dto.getAddress());
            student.setName(dto.getName());
            student.setBranch(branch);
            student.setContact(dto.getContact());
            student.setDob(dto.getDob());
            error = "update successfully";

         studentRepository.save(student);
        }else{
            error = "has empty field";
        }


        return error;
    }

    public String settingMyProfile(EmployeeDTO dto){
        String error = "";
        int branchId =0 ;

        LinkedList<Employee> list= repository.findByUsername(dto.getUsername());

        Employee employee=null;
        for (Employee newemployee : list) {
            employee = newemployee;
        }

        Branch branch = branchRepository.findBranchByBranchName(dto.getBranch());
//        if(!dto.getPassword().isEmpty() && !dto.getP().isEmpty() &&  !dto.getBranch().isEmpty())

        if(!dto.getFullName().isEmpty() && !dto.getNid().isEmpty() &&  !dto.getBranch().isEmpty() && !dto.getMoNumber().isEmpty()){
            employee.setFullName(dto.getFullName());
            employee.setNid(dto.getNid());
            employee.setBranch(branch);
            employee.setMoNumber(dto.getMoNumber());
            error = "Updated successfully";

            repository.save(employee);
        }else{
            error = "Has empty field";
        }


        return error;
    }

    public String updateEmployee(EmployeeDTO dto){
        String error = "";
        int branchId =0 ;

        LinkedList<Employee> list= repository.findByEmpid(dto.getEmpid());

        Employee employee=null;
        for (Employee newemployee : list) {
            employee = newemployee;
        }

        Branch branch = branchRepository.findBranchByBranchName(dto.getBranch());
//        if(!dto.getPassword().isEmpty() && !dto.getP().isEmpty() &&  !dto.getBranch().isEmpty())

        if(!dto.getFullName().isEmpty() && !dto.getNid().isEmpty() &&  !dto.getBranch().isEmpty() && !dto.getMoNumber().isEmpty()){
            employee.setFullName(dto.getFullName());
            employee.setNid(dto.getNid());
            employee.setBranch(branch);
            employee.setMoNumber(dto.getMoNumber());
            error = "Update successfully";

            repository.save(employee);
        }else{
            error = "Has empty field";
        }


        return error;
    }

    public String settingMyProfilePassword(EmployeeDTO dto){
        String error = "";
        String pass = "";
        String newPass = "";
        LinkedList<Employee> list= repository.findByUsername(dto.getUsername());

        try {
            pass=new HashMD5().giveHash(dto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        Employee employee=null;
        for (Employee newemployee : list) {
            employee = newemployee;
        }

        if(!dto.getPassword().isEmpty() && !dto.getPassword2().isEmpty() && !dto.getPassword3().isEmpty()){
            if(pass.equals(employee.getPassword())){
                if(dto.getPassword2().equals(dto.getPassword3())){
                    try {
                        newPass=new HashMD5().giveHash(dto.getPassword2());
                    } catch (NoSuchAlgorithmException e) {
                        e.printStackTrace();
                    }

                    employee.setPassword(newPass);
                    repository.save(employee);
                    error = "Updated successfully";
                }else{
                    error = "password mismatch";
                }

            }else{
                error = "password incorrect";
            }

        }

        return error;
    }

    public String activeEmployee(EmployeeDTO dto){
        String error = "";
        LinkedList<Employee> list= repository.findByEmpid(dto.getEmpid());

        Employee employee=null;
        for (Employee newemployee : list) {
            employee = newemployee;
        }
        if(employee.getIsActive() == 1){
            employee.setIsActive(2);
            repository.save(employee);
            error = "Activated successfully";
        }
        return error;
    }

    public String deactiveEmployee(EmployeeDTO dto){

        String error = "";
        LinkedList<Employee> list= repository.findByEmpid(dto.getEmpid());

        Employee employee=null;
        for (Employee newemployee : list) {
            employee = newemployee;
        }
        if(employee.getIsActive() == 2){
            employee.setIsActive(3);
            repository.save(employee);
            error = "Deactivated successfully";
        }
        return error;

    }



    public LinkedList<StudentDTO> getBranchStudents(String branchName) {
        String branchId = null;

        int count = 0;
        Branch branch = null;
        LinkedList<Student> list = studentRepository.findAll();
        LinkedList<StudentDTO> studentlist = new LinkedList<>();
        for (Student student:list) {
            branch = student.getBranch();

            if(branch == null){
                branchId = "nan";
            }else{
                branchId =branch.getBranchName();
            }

            if(student.getName() != null){
                count = count+1;
            }else{

            }

            if(branchName.equals(branchId)){
                studentlist.add(new StudentDTO(student.getName(),student.getAddress(),student.getIdnum(),student.getContact(),branchId,student.getUsername(),student.getDob(),student.getStuId(),count));
            }

        }
        return studentlist;
    }

//    public String deactivatStudent(StudentDTO dto){
//
//        String error = "";
//        String id = "6";
//         studentRepository.deactiveStuId(6);
//            error = "Deactivated successfully";
//
//
//
//
//
//
//        return error;
//
//    }


}
