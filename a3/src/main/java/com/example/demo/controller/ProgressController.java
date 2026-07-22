package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Record;
import com.example.demo.repository.RecordsRepository;

@RestController
public class ProgressController {
	
	@Autowired
	private RecordsRepository recordsRepository;
	
	@PostMapping("/api/progress")
	public void register(@RequestBody Record record) {
		
		recordsRepository.save(record);
		
		System.out.print(record);
	}
	
}
