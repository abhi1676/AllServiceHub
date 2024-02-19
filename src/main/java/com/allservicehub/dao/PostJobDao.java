package com.allservicehub.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.allservicehub.model.PostJob;

@Repository
public interface PostJobDao extends CrudRepository<PostJob, Integer>{		

}
