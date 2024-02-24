package com.allservicehub.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.allservicehub.model.User;
import com.allservicehub.service.UserService;

@CrossOrigin
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(value= {"/user"})
	public String addUser(@RequestBody User user) {
		userService.add(user);
		return "success";
	}
	
	   @PostMapping("/userlogin")
	    public ResponseEntity<String> login(@RequestBody User user, HttpServletRequest request) {
	        // Retrieve user from the database by email
	        User userFromDB = userService.getByEmail(user.getEmail());

	        if (userFromDB == null) {
	            return ResponseEntity.status(HttpStatus.SC_UNAUTHORIZED).body("User not found");
	        }

	        // Check if the provided password matches the hashed password in the database
	        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	        if (!passwordEncoder.matches(user.getPass(), userFromDB.getPass())) {
	            return ResponseEntity.status(HttpStatus.SC_UNAUTHORIZED).body("Invalid password");
	        }

	        // Password is valid, store user information in session
	        HttpSession session = request.getSession();
	        session.setAttribute("loggedInUser", userFromDB);

	        // Return success message
	        return ResponseEntity.ok("Login successful");
	    }

	    @PostMapping("/logout")
	    public ResponseEntity<String> logout(HttpServletRequest request) {
	        HttpSession session = request.getSession(false);
	        if (session != null) {
	            session.invalidate();
	        }
	        return ResponseEntity.ok("Logout successful");
	    }
	

	
	@GetMapping(value= {"/user"})
	public List<User> getUser() {
		return userService.getAll();		
	}
	
	@GetMapping(value= {"/user/byemail/{email}"})
	public User getUserInfo(@PathVariable String email) {
		return userService.getByEmail(email);
	}
	
	@DeleteMapping(value= {"/user/{id}"})
		public String delUser(@PathVariable int id) {
		 userService.removeById(id);
		 return "success";
	}
	
	
}
