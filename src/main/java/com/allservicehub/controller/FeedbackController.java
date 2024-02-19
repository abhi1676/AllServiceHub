package com.allservicehub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.allservicehub.model.Feedback;
import com.allservicehub.service.FeedbackService;

@RestController
@CrossOrigin
public class FeedbackController {
	
	@Autowired
	private FeedbackService feedbackService;

	@PostMapping(value= {"/feedback"})
	public String feedbackAdd(@RequestBody Feedback feedback) {
		
		feedbackService.add(feedback);
		return "success";
	}
		
	
	@GetMapping(value= {"/feedback"})
	public List<Feedback> getFeedback() {
		
		return feedbackService.getAll();
	}
	
	@DeleteMapping(value= {"/feedback/{id}"})
	public String feedbackDel(@PathVariable int id) {
		feedbackService.removeById(id);
		return "success";
	}
}
