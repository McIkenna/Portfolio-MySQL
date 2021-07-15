package com.ikenna.portfolios.web;

import com.ikenna.portfolios.infos.Education;
import com.ikenna.portfolios.infos.Response;
import com.ikenna.portfolios.services.EducationService;
import com.ikenna.portfolios.services.MapErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/api/education")
@CrossOrigin
public class EducationController {

    @Autowired
    EducationService educationService;

    @Autowired
    MapErrorService mapErrorService;

    @PostMapping("")
    public Response addWorkEducation(@RequestParam MultipartFile file,
                                     Education education){

        Education eduFile = educationService.save(file, education);
        Response response = new Response();
        if(eduFile != null) {
            String downloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/downloadFile/")
                    .path(eduFile.getDocName())
                    .toUriString();

            response.setFileDownloadUri(downloadUri);
            response.setFileName(eduFile.getSchoolName());
            response.setFileType(eduFile.getDocType());
            response.setSize(file.getSize());
            response.setMessage("File Uploaded Successfully!");
            return response;

        }
        response.setMessage("Sorry there was an error somewhere");
        return response;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEducationBySchoolName(@PathVariable long id){
        Education education = educationService.findById(id);
        return new ResponseEntity<Education>(education, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Education> getAllEducation(){
        return educationService.findAllEducation();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEducation(@PathVariable long id){
        educationService.deleteEdu(id);
        return new ResponseEntity<String>("Education with School ID '" + id + "' was deleted", HttpStatus.OK);
    }
}
