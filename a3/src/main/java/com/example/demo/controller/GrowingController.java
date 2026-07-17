package com.example.demo.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.RecordsRepository;

import jakarta.servlet.http.HttpSession;

@RestController
public class GrowingController {
	
	@Autowired
	private RecordsRepository recordsRepository;

	@GetMapping("/api/plant")
	public Integer counter(HttpSession session) {
		Integer id = (Integer) session.getAttribute("loginUserId");
		LocalDate today = LocalDate.now();
		
		int year = today.getYear();
		int month = today.getMonthValue();
		
		LocalDate start = LocalDate.of(year, month, 1);
		LocalDate end = start.plusMonths(1);
		
		int result = recordsRepository.count(id, start, end);
		
		return result;
	}
}
