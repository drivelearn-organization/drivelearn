package com.example.drivelearnbackend.Controllers;

import antlr.collections.List;
import com.example.drivelearnbackend.Controllers.DTO.FeedbackDTO;
import com.example.drivelearnbackend.Controllers.DTO.SessionDTO;
import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Controllers.DTO.VehicleDTO;
import com.example.drivelearnbackend.Sevices.SessionService;
import net.bytebuddy.dynamic.scaffold.MethodGraph;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/session")
public class SessionController {

    @Autowired
    private SessionService sessionService;

    @PostMapping(value = "/checkDate")
    public void checkDate(@RequestBody SessionDTO dto){
        System.out.println(dto.getDate());
    }
//    this is used to add brand new session impotrtant for the -----Ifra's----- use
//    this is the frontend source order you should provide
//{
//    "date":"2021-08-11",
//        "numOfStudent":4,
//        "route":"Agalawatte",
//        "startTime":"10.53PM",
//        "endTime":"11.53AM",
//        "managerId":255,
//        "trainerId":291
//}
    @PostMapping(value = "/addSession")
    public String addSession(@RequestBody SessionDTO dto){
        return sessionService.addSession(dto);
    }


//    this method is called to get the all sessions
    @PostMapping(value = "/getallsessions")
    public LinkedList<SessionDTO> loadAllSessions(@RequestBody StudentDTO dto){
        return sessionService.getAllSessions(dto);
    }
    @PostMapping(value = "/getavailableseats")
    public int getAvailSeatsCount(@RequestBody SessionDTO dto){
        return sessionService.getAvailSeats(dto.getSessionId());
    }

    @PostMapping(value = "/book")
    public boolean bookSession(@RequestBody SessionDTO dto){
        return sessionService.bookSession(dto);

    }
    @PostMapping(value = "/viewallbooking")
    public LinkedList<SessionDTO> viewAllBooking(@RequestBody SessionDTO dto){
        return sessionService.viewAllBooking(dto);
    }

    @PostMapping(value = "/start")
    public void makeStart(@RequestBody SessionDTO dto){
        sessionService.startSession(dto);
    }

    @PostMapping(value = "/end")
    public void makeEnd(@RequestBody SessionDTO dto){
        sessionService.endSession(dto);
    }

    @PostMapping(value = "/checkstarted")
    public boolean checkStarted(@RequestBody SessionDTO dto){
        return sessionService.checkStaarted(dto);
    }

    @PostMapping(value = "/trainerssession")
    public LinkedList<SessionDTO> trainersSessions(@RequestBody SessionDTO dto){
        return sessionService.trainersSessions(dto);
    }

    @PostMapping(value = "/sessionstudents")
    public LinkedList<StudentDTO> getSessiosnsStudents(@RequestBody SessionDTO dto){
        return sessionService.getSessiosnsStudents(dto);
    }

    @PostMapping(value = "/addfeedback")
    public void addFeedback(@RequestBody FeedbackDTO feedbackDTO){
        sessionService.addFeedback(feedbackDTO);
    }

    @PostMapping(value = "/location")
    public void addLocation(@RequestBody SessionDTO dto){
        sessionService.addLocation(dto);
    }

    @PostMapping(value = "/getlocation")
    public SessionDTO getLocation(@RequestBody SessionDTO dto){
        return sessionService.getLocation(dto);
    }


}
