package com.digirojgar.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.digirojgar.model.User;

@Service
public interface UserService {
	
	void add(User user);
	List<User> getAll();
	User getByEmail(String email);
	void removeById(int id);
}
