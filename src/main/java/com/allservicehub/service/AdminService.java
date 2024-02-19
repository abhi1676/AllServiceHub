package com.digirojgar.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.digirojgar.model.Admin;
import com.digirojgar.model.PostJob;
import com.digirojgar.model.User;

@Service
public interface AdminService {
	
	void add(Admin admin);
	
	List<Admin> getAll();
	Admin getByEmail(String email);
}
