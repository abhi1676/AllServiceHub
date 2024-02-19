package com.allservicehub.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.allservicehub.model.Admin;
import com.allservicehub.model.PostJob;
import com.allservicehub.model.User;

@Service
public interface AdminService {
	
	void add(Admin admin);
	
	List<Admin> getAll();
	Admin getByEmail(String email);
}
