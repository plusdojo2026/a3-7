package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.repository.UsersRepository;

import jakarta.servlet.http.HttpSession;

@RestController
public class LoginController {

	@Autowired
	private UsersRepository repository;
	
	@PostMapping("/api/login")
	public ResponseEntity<String> login(@RequestBody User user, HttpSession session) {
		
		 User users = repository.findBymailAddressAndPassword(user.getMailAddress(), user.getPassword());
		
		if(users!=null) {
			session.setAttribute("loginUserId", users.getId());
			return ResponseEntity.ok("success");
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("failure");
		
	}
	
	@PostMapping("/api/newRegist")
	private User add(@RequestBody User user) {
		repository.save(user);
		return user;
	}
}
