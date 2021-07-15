package com.ikenna.portfolios.components;

import com.ikenna.portfolios.infos.Education;
import org.springframework.web.multipart.MultipartFile;

public interface IEducationService {

    Education save(MultipartFile multipartFile, Education education);
    void deleteEdu(long id);
}
