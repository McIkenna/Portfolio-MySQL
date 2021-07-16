package com.ikenna.portfolios.services;

import com.ikenna.portfolios.components.ISkillsService;
import com.ikenna.portfolios.exceptions.InfoException;
import com.ikenna.portfolios.exceptions.SkillException;
import com.ikenna.portfolios.infos.Skills;
import com.ikenna.portfolios.repository.SkillsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Service
public class SkillsService implements ISkillsService {

    @Autowired
    SkillsRepository skillsRepository;

    public Skills saveOrUpdateSkills(MultipartFile file, Skills skills) {


        String skillName = skills.getSkillName();
        String subName = skills.getSubName();
        String proficiency = skills.getProficiency();
        int rating = skills.getRating();
        String docName = file.getOriginalFilename();
        String docType = file.getContentType();

        String downloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(docName)
                .toUriString();
        String urlDownload = skills.setUrlDownload(downloadUri);
       try{
           Skills skill = new Skills(skillName, subName, proficiency, rating, file.getBytes(), docName, docType, urlDownload);
               skills = skillsRepository.save(skill);

           return skills;
       }catch(Exception e){
           throw new SkillException("The Skill, '" + skills.getSkillName().toUpperCase() + "' already exist");
       }
    }

    public Skills findById(long id){
        Skills skills = skillsRepository.findById(id);

        if(skills == null){
            throw new InfoException("The user with phone number '" + id + "' does not exist");
        }
        return skills;
    }

    public Iterable<Skills> findAllSkills(){
        return skillsRepository.findAll();
    }

    public void deleteById(long id){
        Skills skill = skillsRepository.findById(id);
        if(skill == null){
            throw new InfoException("Cannot delete, '" + id + "' does not exist");
        }
        skillsRepository.delete(skill);
    }

}
