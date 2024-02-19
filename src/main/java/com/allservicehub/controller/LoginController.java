package com.allservicehub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.allservicehub.model.Login;
import com.allservicehub.service.LoginService;

@RestController
@CrossOrigin
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	
	@PostMapping(value= {"/login"})
	public String logUser(@RequestBody Login login) {
		loginService.add(login);
		return "success";
	}
	
	
}
