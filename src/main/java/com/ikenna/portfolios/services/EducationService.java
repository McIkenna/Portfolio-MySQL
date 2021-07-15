package com.ikenna.portfolios.services;

import com.ikenna.portfolios.components.IEducationService;
import com.ikenna.portfolios.exceptions.EducationException;
import com.ikenna.portfolios.infos.Education;
import com.ikenna.portfolios.repository.AddressRepository;
import com.ikenna.portfolios.repository.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Service
public class EducationService implements IEducationService {

    @Autowired
    private EducationRepository educationRepository;

    @Autowired
    public AddressRepository addressRepository;


    public Education save(MultipartFile file, Education education) {


        String schoolName = education.getSchoolName();
        String major = education.getMajor();
        String concentration = education.getConcentration();
        String honor = education.getHonor();
        String docName = file.getOriginalFilename();
        String docType = file.getContentType();

        String downloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(docName)
                .toUriString();
        String urlDownload = education.setUrlDownload(downloadUri);
        try{
            Education edu = new Education(schoolName, major, concentration, honor, file.getBytes(), docName, docType , urlDownload);
            return educationRepository.save(edu);
        }catch(Exception ex){
            throw new EducationException("Schoolname '" + education.getSchoolName().toUpperCase() + "' Already exist");
        }
    }


    public Education findById(long id) {
        Education education = educationRepository.findById(id);
        if(education == null){
            throw new EducationException("School with Education ID'" + id + "' Cannot be found");
        }
        return education;
    }

    public Iterable<Education> findAllEducation(){
        return educationRepository.findAll();
    }

    public void deleteEdu(long id){
        Education education = educationRepository.findById(id);

        if(education == null){
            throw new EducationException("School with Education ID'" + id + "' Cannot be found");
        }
        educationRepository.delete(education);
    }




}
