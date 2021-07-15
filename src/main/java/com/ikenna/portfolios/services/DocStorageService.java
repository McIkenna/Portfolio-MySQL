package com.ikenna.portfolios.services;


import com.ikenna.portfolios.components.IDocService;
import com.ikenna.portfolios.exceptions.WorkException;
import com.ikenna.portfolios.infos.Doc;
import com.ikenna.portfolios.repository.DocRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.Date;

@Service
public class DocStorageService implements IDocService {
    @Autowired
    private DocRepository docRepository;

    public Doc saveFile(MultipartFile file, Doc docFile) {
        String docName = file.getOriginalFilename();
        String projectTitle = docFile.getProjectTitle();
        String projectSummary = docFile.getProjectSummary();
        String role = docFile.getKeyRole();
        int progressRate = docFile.getProgressRate();
        String link = docFile.getLink();
        Date startDate = docFile.getStartDate();
        Date endDate = docFile.getEndDate();
        String downloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(docName)
                .toUriString();
        String urlDownload = docFile.setUrlDownload(downloadUri);


        try {
            Doc doc = new Doc(docName,file.getContentType(),file.getBytes(), urlDownload, link, projectTitle,projectSummary, progressRate, role, startDate, endDate);
            return docRepository.save(doc);
        }
        catch(IOException e) {
            e.printStackTrace();
            return null;
        }
    }


    public Doc getFile(long id) {
        Doc doc =  docRepository.findById(id);
        if(doc == null){
            throw new WorkException("The user with phone number '" + id + "' does not exist");
        }
        return doc;
    }

    public void DeleteWorkById(long id){
        Doc doc = docRepository.findById(id);
        if(doc == null){
            throw new WorkException("Cannot delete, '" + id + "' does not exist");
        }
        docRepository.delete(doc);
    }

    public Iterable<Doc> getFiles(){
        return docRepository.findAll();
    }
}
