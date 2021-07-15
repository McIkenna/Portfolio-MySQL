package com.ikenna.portfolios.repository;


import com.ikenna.portfolios.infos.Education;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationRepository extends CrudRepository<Education, Integer> {

    Education findById(long id);

    @Override
    Iterable<Education>findAll();

}
