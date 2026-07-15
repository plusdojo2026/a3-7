package com.example.demo.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@GetMapping("/home/")
	public String welcome(@RequestParam String nickname, Model model) {
		model.addAttribute("nickname", nickname + "さん、ようこそ");
		return "home";
	}
}
