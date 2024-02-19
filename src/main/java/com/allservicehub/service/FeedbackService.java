package com.digirojgar.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.digirojgar.model.Feedback;

@Service
public interface FeedbackService {
	
	void add(Feedback feedback);
	List<Feedback> getAll();
	void removeById(int id);
}
