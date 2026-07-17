package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Keep;
import com.example.demo.entity.Record;
import com.example.demo.entity.User;
import com.example.demo.repository.KeepRepository;
import com.example.demo.repository.RecordsRepository;
import com.example.demo.repository.UsersRepository;

import jakarta.servlet.http.HttpSession;

@RestController
public class HomeController {

	@Autowired
	private UsersRepository userRepository;
	
	@Autowired
	private KeepRepository keepRepository;
	
	@Autowired
	private RecordsRepository recordRepository;
	
	@GetMapping("/api/home")
	public  User welcome(HttpSession session){
		
		Integer id = (Integer) session.getAttribute("loginUserId");
		
		return userRepository.findById(id).orElseThrow();
	}
	
	@GetMapping("/api/mission")
	public Keep found(HttpSession session) {
		
		Integer id = (Integer) session.getAttribute("loginUserId");
		
		Keep keep =keepRepository.findByUserId(id);
		System.out.println(keep);
		
		return keep;
	}
	
	@PostMapping("/api/mission/add")
	public void add(@RequestBody Keep keep, HttpSession session) {
		Integer id = (Integer) session.getAttribute("loginUserId");
		User user = userRepository.findById(id) .orElseThrow();
		 Optional<Keep> oldKeep = keepRepository.findByUser(user);

		    if (oldKeep.isPresent()) {
		        // 更新
		        Keep update = oldKeep.get();

		        update.setDate(keep.getDate());
		        update.setSuggest1(keep.getSuggest1());
		        update.setSuggest2(keep.getSuggest2());
		        update.setSuggest3(keep.getSuggest3());

		        keepRepository.save(update);

		    } else {
		        // 新規登録
		        keep.setUser(user);
		        keepRepository.save(keep);
		    }
	}
	
	@GetMapping("/api/mission/include")
	public Keep foundMission(HttpSession session) {
		
		Integer id = (Integer) session.getAttribute("loginUserId");
		
		return keepRepository.findByUserId(id);
	}
	
	@PostMapping("/api/records/add")
	public void add(@RequestBody Record record, HttpSession session) {
		Integer id = (Integer) session.getAttribute("loginUserId");
		User user = userRepository.findById(id).orElseThrow();
		record.setUser(user);
		recordRepository.save(record);
	}
}
