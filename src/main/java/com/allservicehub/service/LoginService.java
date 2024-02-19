package com.allservicehub.service;

import org.springframework.stereotype.Service;

import com.allservicehub.model.Admin;
import com.allservicehub.model.Login;

@Service
public interface LoginService {
	
	void add(Login login);

}
