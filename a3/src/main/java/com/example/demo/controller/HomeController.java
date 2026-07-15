package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;

@RestController
public class HomeController {

	@GetMapping("/home")
	public User welcome(@RequestParam ("id") Integer id){
		User user = repository.findById(id).get();
		return user;
	}
}
