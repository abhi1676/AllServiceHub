package com.allservicehub.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allservicehub.dao.PostJobDao;
import com.allservicehub.model.PostJob;

@Service
public class PostJobServiceImpl implements PostJobService{
	
	@Autowired
	private PostJobDao postJobDao;
	
	
	@Override
	public void add(PostJob postJob) {
		
		postJobDao.save(postJob);
	}

	@Override
	public List<PostJob> getAll() {
		Iterable<PostJob> itr = postJobDao.findAll();
		List<PostJob> lst = new ArrayList<PostJob>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

	@Override
	public void removeById(int id) {
		
		postJobDao.deleteById(id);
	}

	
}
