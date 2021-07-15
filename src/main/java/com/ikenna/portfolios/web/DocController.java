package com.ikenna.portfolios.web;

import com.ikenna.portfolios.infos.Doc;
import com.ikenna.portfolios.infos.Response;
import com.ikenna.portfolios.services.DocStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/api/project")
@CrossOrigin
public class DocController {
    @Autowired
    private DocStorageService docStorageService;

    @GetMapping("/")
    public String get(Model model) {
        Iterable<Doc> docs = docStorageService.getFiles();
        model.addAttribute("docs", docs);
        return "doc";
    }

    @PostMapping("/uploadFile")
        public Response docFileUpload(@RequestParam("file") MultipartFile file,
                                      Doc doc){

            Doc docFile = docStorageService.saveFile(file, doc);
            Response response = new Response();
            if(docFile != null){
                String downloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                        .path("/downloadFile/")
                        .path(docFile.getDocName())
                        .toUriString();
                response.setFileDownloadUri(downloadUri);
                response.setFileName(docFile.getDocName());
                response.setFileType(docFile.getDocType());
                response.setSize(file.getSize());
                response.setMessage("File Uploaded Successfully!");
                return response;
            }
           response.setMessage("Sorry there was an error somewhere");
            return response;
    }
/*
    @PostMapping("/uploadFiles")
    public String uploadMultipleFiles(@RequestParam("files") MultipartFile[] files, Doc[] docs) {
        for (MultipartFile file: files) {
            for(Doc doc: docs){
                docStorageService.saveFile(file, doc);
            }
            

        }
        return "redirect:/";
    }

    @GetMapping("/downloadFile/{id")
    public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable long id){
        Doc doc = docStorageService.getFile(id);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(doc.getDocType()))
                .header(HttpHeaders.CONTENT_DISPOSITION,"attachment:filename=\""+doc.getDocName()+"\"")
                .body(new ByteArrayResource(doc.getData()));
    }
   */

    @GetMapping("/all")
    public Iterable<Doc> findAllTasks(){
        return docStorageService.getFiles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findTAskById(@PathVariable long id){
       Doc doc = docStorageService.getFile(id);
        return new ResponseEntity<Doc>(doc, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteWork(@PathVariable long id){
        docStorageService.DeleteWorkById(id);
        return new ResponseEntity<String>("Work with company name '" + id + "' was deleted", HttpStatus.OK);
    }
}
