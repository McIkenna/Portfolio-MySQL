package com.ikenna.portfolios.repository;

import com.ikenna.portfolios.infos.Skills;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillsRepository extends CrudRepository<Skills, Long> {

    Skills findById(long id);

    @Override
    Iterable<Skills> findAll();
}
