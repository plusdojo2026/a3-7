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
			
			if(progress == null || progress.isEmpty()) {
				if(record.getProgress().isEmpty()) {
					update.setProgress(null);
				}
				else {
					update.setProgress(record.getProgress());
				}
			}
			else if(record.getProgress().isEmpty()) {
					update.setProgress(progress);
				}
			else {
				update.setProgress(progress + "," + record.getProgress());
			}
			
			if(feel == null || feel.isEmpty()) {
				if(record.getFeel().isEmpty()) {
					update.setFeel(null);
				}
				else {
					update.setFeel(record.getFeel());
				}
			}
			else if(record.getFeel().isEmpty()) {
				update.setFeel(feel);
			}
			else {
				update.setFeel(feel + "," + record.getFeel());
			}
			
			if(found == null || found.isEmpty()) {
				if(record.getFound().isEmpty()) {
					update.setFound(null);
				}
				else {
					update.setFound(record.getFound());
				}
				update.setFound(record.getFound());
			}
			else if(record.getFound().isEmpty()) {
				update.setFound(found);
			}
			else {
				update.setFound(found + "," + record.getFound());
			}
			
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
