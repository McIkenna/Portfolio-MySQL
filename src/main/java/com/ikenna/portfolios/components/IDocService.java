package com.ikenna.portfolios.components;

import com.ikenna.portfolios.infos.Doc;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public interface IDocService {
    Doc saveFile(MultipartFile multipartFile, Doc docFile);
}
