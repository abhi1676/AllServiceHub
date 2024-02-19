package com.digirojgar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digirojgar.dao.LoginDao;
import com.digirojgar.model.Admin;
import com.digirojgar.model.Login;

@Service
public class LoginServiceImpl implements LoginService{
	
	@Autowired
	private LoginDao loginDao;
	
	@Override
	public void add(Login login) {
		
		loginDao.save(login);
	}

}
