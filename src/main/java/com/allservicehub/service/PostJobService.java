package com.digirojgar.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.digirojgar.model.PostJob;

@Service
public interface PostJobService {
		
	void add(PostJob postJob);
	List<PostJob> getAll();
	void removeById(int id);
}
