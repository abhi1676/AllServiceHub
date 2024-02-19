package com.digirojgar.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.digirojgar.model.ContactUs;

@Service
public interface ContactUsService {
	void add(ContactUs contactUs);
	List<ContactUs> getAll();
	void removeById(int id);
}
