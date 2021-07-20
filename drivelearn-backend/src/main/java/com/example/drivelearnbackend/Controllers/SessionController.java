package com.example.drivelearnbackend.Controllers;

import antlr.collections.List;
import com.example.drivelearnbackend.Controllers.DTO.SessionDTO;
import com.example.drivelearnbackend.Controllers.DTO.StudentDTO;
import com.example.drivelearnbackend.Sevices.SessionService;
import net.bytebuddy.dynamic.scaffold.MethodGraph;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;

@RestController
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
    public void addSession(@RequestBody SessionDTO dto){
        sessionService.addSession(dto);
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

    

}
