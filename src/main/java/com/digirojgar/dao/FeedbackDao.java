package com.digirojgar.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.digirojgar.model.Feedback;

@Repository
public interface FeedbackDao extends CrudRepository<Feedback, Integer>{

}
