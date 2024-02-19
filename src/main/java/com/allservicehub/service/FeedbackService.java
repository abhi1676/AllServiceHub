package com.allservicehub.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.allservicehub.model.Feedback;

@Service
public interface FeedbackService {
	
	void add(Feedback feedback);
	List<Feedback> getAll();
	void removeById(int id);
}
