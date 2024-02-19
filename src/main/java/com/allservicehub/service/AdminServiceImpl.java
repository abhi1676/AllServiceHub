package com.digirojgar.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digirojgar.dao.AdminDao;
import com.digirojgar.model.Admin;
import com.digirojgar.model.PostJob;
import com.digirojgar.model.User;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminDao adminDao;
	
	@Override
	public void add(Admin admin) {
			
		adminDao.save(admin);
	}


	@Override
	public List<Admin> getAll() {
		Iterable<Admin> itr = adminDao.findAll();
		List<Admin> lst = new ArrayList<Admin>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}


	@Override
	public Admin getByEmail(String email) {
		Admin opt =  adminDao.findByEmail(email);
		if(opt.getId()== 0) {
			return null;
		}
		return opt;	
	}


	

}
