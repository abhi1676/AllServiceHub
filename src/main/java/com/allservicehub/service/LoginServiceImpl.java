package com.allservicehub.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allservicehub.dao.LoginDao;
import com.allservicehub.model.Admin;
import com.allservicehub.model.Login;

@Service
public class LoginServiceImpl implements LoginService{
	
	@Autowired
	private LoginDao loginDao;
	
	@Override
	public void add(Login login) {
		
		loginDao.save(login);
	}

}
