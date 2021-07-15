package com.ikenna.portfolios.repository;

import com.ikenna.portfolios.infos.Doc;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocRepository extends CrudRepository<Doc, Integer> {

    public Doc findById(long id);

    @Override
    Iterable<Doc> findAll();
}
