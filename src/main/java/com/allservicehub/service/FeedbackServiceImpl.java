package com.allservicehub.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allservicehub.dao.FeedbackDao;
import com.allservicehub.model.Feedback;

@Service
public class FeedbackServiceImpl  implements FeedbackService{
	
	@Autowired
	private FeedbackDao feedbackDao;
	

	@Override
	public List<Feedback> getAll() {
		Iterable<Feedback> itr = feedbackDao.findAll();
		List<Feedback> lst = new ArrayList<Feedback>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

	@Override
	public void add(Feedback feedback) {
		
	feedbackDao.save(feedback);
	}

	@Override
	public void removeById(int id) {
		feedbackDao.deleteById(id);
	}

}
