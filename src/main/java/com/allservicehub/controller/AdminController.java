package com.allservicehub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.allservicehub.model.Admin;
import com.allservicehub.model.PostJob;
import com.allservicehub.model.User;
import com.allservicehub.service.AdminService;

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
