package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.repository.UsersRepository;

import jakarta.servlet.http.HttpSession;

@RestController
public class LoginController {

	@Autowired
	private UsersRepository repository;
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestParam String mailAddress,
						@RequestParam String password,
						HttpSession session) {
		
		User user = repository.findBymailAddressAndPassword(mailAddress, password);
		
		if(user!=null) {
			session.setAttribute("loginUserId", user.getId());
			return ResponseEntity.ok("success");
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("failure");
		
	}
}
