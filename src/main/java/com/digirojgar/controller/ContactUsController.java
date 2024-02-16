package com.digirojgar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.digirojgar.model.ContactUs;
import com.digirojgar.service.ContactUsService;

@RestController
@CrossOrigin
public class ContactUsController {
		
	@Autowired
	private ContactUsService contactUsService;
	
	@PostMapping(value= {"/contact"})
	public String getContact(@RequestBody ContactUs contactUs) {
		contactUsService.add(contactUs);
		return "success";
	}
	
	@GetMapping(value= {"/contact"})
	public List<ContactUs> getAll() {
		return contactUsService.getAll();
	}
	
	@DeleteMapping(value= {"/contact/{id}"})
	public String removeContact(@PathVariable int id) {
		contactUsService.removeById(id);
		return "success";
	}
}
