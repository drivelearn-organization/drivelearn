package com.example.drivelearnbackend.Sevices;

import com.example.drivelearnbackend.Controllers.DTO.StaffSessionDTO;
import com.example.drivelearnbackend.Repositories.BranchRepository;
import com.example.drivelearnbackend.Repositories.Entity.Session;
import com.example.drivelearnbackend.Repositories.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;

@Service
public class StaffSessionService {
    @Autowired
    private SessionRepository sessionRepository;

    @Autowired
    private BranchRepository branchRepository;

    public LinkedList<StaffSessionDTO> getAllSession(int branchId){
        LinkedList<StaffSessionDTO> sessionDTOS=new LinkedList<>();
        for (Session session : sessionRepository.findAllByBranch(branchRepository.findById(branchId).get())) {
            sessionDTOS.add(new StaffSessionDTO(session.getSessionId(), session.getTrainer().getFullName(),session.getDate(),session.getStatus(),session.getNumOfStudent(),session.getStartTime(),session.getStuSessions().size()));
        }
        return sessionDTOS;
    }
}
