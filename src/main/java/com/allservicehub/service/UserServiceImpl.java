package com.allservicehub.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allservicehub.dao.UserDao;
import com.allservicehub.model.User;


@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDao userDao;
	
	@Override
	public void add(User user) {
		
		userDao.save(user);
	}

	@Override
	public List<User> getAll() {
		Iterable<User> itr = userDao.findAll();
		List<User> lst = new ArrayList<User>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}


	@Override
	public void removeById(int id) {
		
		userDao.deleteById(id);
	}

	@Override
	public User getByEmail(String email) {
		User opt =  userDao.findByEmail(email);
		if(opt.getId()== 0) {
			return null;
		}
		return opt;	
	}
}
