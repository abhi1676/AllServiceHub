package com.digirojgar.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.digirojgar.model.PostJob;

@Repository
public interface PostJobDao extends CrudRepository<PostJob, Integer>{		

}
