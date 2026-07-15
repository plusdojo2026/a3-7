package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;

import jakarta.servlet.http.HttpSession;

@RestController
public class HomeController {

	//@Autowired
	//private UserRepository repository;
	
	@GetMapping("/home")
	public User welcome(HttpSession session){
		
		Integer id = (Integer) session.getAttribute("loginUserId");
		
		if(id == null) {
			throw new RuntimeException("ログインしてください");
		}
		
		return null;//repository.findById(id)
                //.orElseThrow(() -> new RuntimeException("ユーザーが見つかりません"));
	}
}
