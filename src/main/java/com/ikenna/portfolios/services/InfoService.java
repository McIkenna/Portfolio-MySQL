package com.ikenna.portfolios.services;

import com.ikenna.portfolios.components.IInfoService;
import com.ikenna.portfolios.exceptions.InfoException;
import com.ikenna.portfolios.infos.Info;
import com.ikenna.portfolios.repository.InfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InfoService implements IInfoService {

    @Autowired
    private InfoRepository infoRepository;

    public Info saveOrUpdateInfo(Info info){
       try{

           return infoRepository.save(info);

       }catch (Exception e){
           throw new InfoException("The user with phone number '" + info.getId() + "' already exist");

       }

    }

    public Info findInfoById(long id){
        Info info = infoRepository.findById(id);

        if(info == null){
            throw new InfoException("The user with phone number '" + id + "' does not exist");
        }
        return info;
    }

    public Iterable<Info> findAllInfos(){
        return infoRepository.findAll();
    }


    public void deleteInfoById(long id){
        Info info = infoRepository.findById(id);

        if(info == null){
            throw new InfoException("Cannot delete, '" + id + "' does not exist");
        }
        infoRepository.delete(info);
    }
}
