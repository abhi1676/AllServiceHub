package com.digirojgar.service;

import org.springframework.stereotype.Service;

import com.digirojgar.model.Admin;
import com.digirojgar.model.Login;

@Service
public interface LoginService {
	
	void add(Login login);

}
