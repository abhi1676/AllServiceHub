package com.allservicehub.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.allservicehub.model.ContactUs;

@Service
public interface ContactUsService {
	void add(ContactUs contactUs);
	List<ContactUs> getAll();
	void removeById(int id);
}
