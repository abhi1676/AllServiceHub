package com.digirojgar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.digirojgar.model.Admin;
import com.digirojgar.model.PostJob;
import com.digirojgar.model.User;
import com.digirojgar.service.AdminService;

@CrossOrigin
@RestController
public class AdminController {
		
	@Autowired
	private AdminService adminService;
	
	@PostMapping(value= {"/admin"})
	public String addAdmin(@RequestBody Admin admin) {
		adminService.add(admin);
		return "success";
	}
	
	@GetMapping(value= {"/admin"})
	public List<Admin> getAllAdmin() {
		return adminService.getAll();
	}
	
	@GetMapping(value= {"/admin/{email}"})
	public Admin getAdminInfo(@PathVariable String email) {
		return adminService.getByEmail(email);
	}
}
