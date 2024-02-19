package com.allservicehub.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allservicehub.dao.ContactUsDao;
import com.allservicehub.model.ContactUs;

@Service
public class ContactUsServiceImpl  implements ContactUsService{

	@Autowired
	private ContactUsDao contactUsDao;
	
	@Override
	public void add(ContactUs contactUs) {
		contactUsDao.save(contactUs);
	}

	@Override
	public List<ContactUs> getAll() {
		Iterable<ContactUs> itr = contactUsDao. findAll();
		List<ContactUs> lst = new ArrayList<ContactUs>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

	@Override
	public void removeById(int id) {
		contactUsDao.deleteById(id);
	}

}
