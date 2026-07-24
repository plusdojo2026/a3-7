package com.example.demo.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Record;
import com.example.demo.entity.User;
import com.example.demo.repository.RecordsRepository;
import com.example.demo.repository.UsersRepository;

import jakarta.servlet.http.HttpSession;

@RestController
public class ProgressController {
	
	@Autowired
	private RecordsRepository recordsRepository;
	
	@Autowired
	private UsersRepository userRepository;
	
	@PostMapping("/api/progress")
	public void register(@RequestBody Record record, HttpSession session) {
		Integer id = (Integer) session.getAttribute("loginUserId");
		User user = userRepository.findById(id) .orElseThrow();
		LocalDate today = LocalDate.now();
		
	System.out.println("loginUserId =" + id);  //確認用
		
		//更新
		List<Record> records = recordsRepository.findByUserAndDate(user, today);
		
		if (!records.isEmpty()) {
			Record update = records.get(0);
			String progress = update.getProgress();
			String feel = update.getFeel();
			String found = update.getFound();
			
			update.setProgress(progress + "," + record.getProgress());
			update.setFeel(feel + "," + record.getFeel());
			update.setFound(found + "," + record.getFound());
			
			recordsRepository.save(update);
		}
		
		else {
			record.setUser(user);
			
			System.out.print("user" + user);
			
			record.setDate(today);
			recordsRepository.save(record);
		}
		
		
		System.out.print(record);
	}
	
}
