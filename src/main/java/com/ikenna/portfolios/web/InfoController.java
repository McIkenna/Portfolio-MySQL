package com.ikenna.portfolios.web;

import com.ikenna.portfolios.infos.Info;
import com.ikenna.portfolios.services.InfoService;
import com.ikenna.portfolios.services.MapErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@SpringBootApplication
@RequestMapping("")
@CrossOrigin
public class InfoController {
    @Autowired
    private InfoService infoService;

    @Autowired
    private MapErrorService mapErrorService;

    @PostMapping("/admin/info")
    public ResponseEntity<?> createNewInfo(@Valid @RequestBody Info info, BindingResult result){

       ResponseEntity<?> errorMap = mapErrorService.MapErrorService(result);
       if(errorMap != null) return errorMap;

        Info info1 = infoService.saveOrUpdateInfo(info);
        return new ResponseEntity<Info>(info, HttpStatus.CREATED);
    }


    @GetMapping("/api/info/{id}")
    public ResponseEntity<?> getInfoPhoneNo(@PathVariable long id){

        Info info = infoService.findInfoById(id);
        return new ResponseEntity<Info>(info, HttpStatus.OK);
    }


    @GetMapping("/api/info/all")
    public Iterable<Info> getAllInfos(){
        return infoService.findAllInfos();
    }

    @DeleteMapping("/admin/info/{id}")
    public ResponseEntity<?> deleteInfo(@PathVariable long id){
        infoService.deleteInfoById(id);

        return new ResponseEntity<String>("User with ID: '" + id + "' was deleted", HttpStatus.OK);
    }
}
