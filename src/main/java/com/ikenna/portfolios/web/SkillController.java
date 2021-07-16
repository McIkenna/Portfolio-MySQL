package com.ikenna.portfolios.web;

import com.ikenna.portfolios.infos.Response;
import com.ikenna.portfolios.infos.Skills;
import com.ikenna.portfolios.services.MapErrorService;
import com.ikenna.portfolios.services.SkillsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@SpringBootApplication
@RequestMapping("")
@CrossOrigin
public class SkillController {

    @Autowired
    SkillsService skillsService;

    @Autowired
    MapErrorService mapErrorService;

    @PostMapping("/admin/skill")
    public Response createNewInfo(@RequestParam MultipartFile file, Skills skills){


        Skills skill1 = skillsService.saveOrUpdateSkills(file, skills);
        Response response = new Response();
        if(skill1 != null) {
            String downloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/downloadFile/")
                    .path(skill1.getDocName())
                    .toUriString();

            response.setFileDownloadUri(downloadUri);
            response.setFileName(skill1.getSkillName());
            response.setFileType(skill1.getDocType());
            response.setSize(file.getSize());
            response.setMessage("File Uploaded Successfully!");
            return response;
        }
        response.setMessage("Sorry there was an error somewhere");
        return response;

    }

    @GetMapping("/api/skill/{id}")
    public ResponseEntity<?> getInfoPhoneNo(@PathVariable long id){

        Skills skills = skillsService.findById(id);
        return new ResponseEntity<Skills>(skills, HttpStatus.OK);
    }

    @GetMapping("/api/skill/all")
    public Iterable<Skills> findAllSkills(){
        return skillsService.findAllSkills();
    }

    @DeleteMapping("/admin/skill/{id}")
    public ResponseEntity<?> deleteSkill(@PathVariable long id){
        skillsService.deleteById(id);

        return new ResponseEntity<String>("User with ID: '" + id + "' was deleted", HttpStatus.OK);
    }
}
