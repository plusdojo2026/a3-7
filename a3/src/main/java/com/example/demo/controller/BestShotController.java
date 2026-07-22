package com.example.demo.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.Gallery;
import com.example.demo.entity.User;
import com.example.demo.repository.GalleriesRepository;
import com.example.demo.repository.UsersRepository;

@RestController
public class BestShotController {
	
	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private GalleriesRepository galleriesRepository;
	
	@PostMapping("/api/bestshot")
	public void uploadImage(
			@RequestParam("image") MultipartFile image,
			@RequestParam("userId") Integer userId
		) throws IOException {
		
		User user = usersRepository.findById(userId)
				.orElseThrow();
		
		//画像保存処理(例)
		
		Gallery gallery = new Gallery();
		gallery.setUser(user);
		gallery.setImage(image.getBytes());
		
		galleriesRepository.save(gallery);
	}

}
