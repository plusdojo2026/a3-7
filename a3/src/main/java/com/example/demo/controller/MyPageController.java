package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Icon;
import com.example.demo.entity.User;
import com.example.demo.repository.IconsRepository;
import com.example.demo.repository.UsersRepository;

import jakarta.servlet.http.HttpSession;

@RestController

public class MyPageController {

	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private IconsRepository iconsRepository;
	
	@PostMapping("/api/mypage")
	public void save(@RequestBody User user, HttpSession session) {
		
		Integer id = (Integer) session.getAttribute("loginUserId");
		System.out.println("loginUserId =" + id);  //確認用
		
		User oldUser = usersRepository.findById(id)
				.orElseThrow();
		
		oldUser.setId(id);
		
		
		oldUser.setNickname(user.getNickname());
		
		//oldUser.setIcon(user.getIcon());
		
		Icon icon = iconsRepository.findById(user.getIcon().getId())
				.orElseThrow();
		System.out.print("icon =" + user.getIcon());
		System.out.print("icon id =" + user.getIcon().getId());
		
		oldUser.setIcon(icon);
		
		
		
		usersRepository.save(oldUser);
	}
	
}
