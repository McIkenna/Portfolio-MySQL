package com.ikenna.portfolios.components;

import com.ikenna.portfolios.infos.Skills;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public interface ISkillsService {

 Skills saveOrUpdateSkills(MultipartFile file, Skills skills);
}
