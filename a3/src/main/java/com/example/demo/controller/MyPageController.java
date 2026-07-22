package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Icon;
import com.example.demo.entity.User;
import com.example.demo.repository.IconsRepository;
import com.example.demo.repository.UsersRepository;

@RestController
public class MyPageController {

	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private IconsRepository iconsRepository;
	
	@PostMapping("/api/mypage")
	public void save(@RequestBody User user) {
		
		User oldUser = usersRepository.findById(user.getId())
				.orElseThrow();
		
		oldUser.setNickname(user.getNickname());
		
		Icon icon = iconsRepository.findById(user.getIcon().getId())
				.orElseThrow();
		
		oldUser.setIcon(icon);
		
		usersRepository.save(oldUser);
	}
	
}
