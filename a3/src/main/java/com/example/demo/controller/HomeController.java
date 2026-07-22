package com.example.demo.controller;

import java.time.LocalDate;
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
		LocalDate today = LocalDate.now();
		
		Keep keep = keepRepository.findByUserIdAndDate(id, today);
		
		if(keep == null) {
			keep = new Keep();
			User user = userRepository.findById(id) .orElseThrow();
			keep.setUser(user);
			keep.setDate(today.plusDays(1));
		}
		
		System.out.println("検証"+keep);
		
		return keep;
	}
	
	@PostMapping("/api/mission/add")
	public void add(@RequestBody Keep keep, HttpSession session) {
		Integer id = (Integer) session.getAttribute("loginUserId");
		User user = userRepository.findById(id) .orElseThrow();
		LocalDate today = LocalDate.now();
		Optional<Keep> oldKeep = keepRepository.findByUserAndDate(user, today);

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
		LocalDate today = LocalDate.now();
		
		Keep keep = keepRepository.findByUserIdAndDate(id, today);
		System.out.println(keep);
		
		return keep;
	}
	
	@PostMapping("/api/records/add")
	public void add(@RequestBody Record record, HttpSession session) {
		Integer id = (Integer) session.getAttribute("loginUserId");
		User user = userRepository.findById(id).orElseThrow();
		LocalDate today = LocalDate.now();
		Optional<Record> oldRecord = recordRepository.findByUserAndDate(user, today);
		if (oldRecord.isPresent()) {
			// 更新
			Record update = oldRecord.get();
			String mission = update.getMission();
			update.setMission(mission + ", "+ record.getMission());
			recordRepository.save(update);
				
		} 
		else {
			// 新規登録
			record.setUser(user);
			recordRepository.save(record);
		}
	}
	
	@PostMapping("/api/mission/mod")
	public void complete(@RequestBody Keep keepRequest, HttpSession session) {
		Integer id = (Integer) session.getAttribute("loginUserId");
		LocalDate today = LocalDate.now();
		Keep keep = keepRepository.findByUserIdAndDate(id, today);
		
		String[] missions = keepRequest.getMission().split(",");
		
		for(String mission : missions) {
			mission = mission.trim();
			
			if(keep.getSuggest1().getSuggest().equals(mission)) {
				keep.setSuggest1Completed(true);
			}
			if(keep.getSuggest2().getSuggest().equals(mission)) {
				keep.setSuggest2Completed(true);
			}
			if(keep.getSuggest3().getSuggest().equals(mission)) {
				keep.setSuggest3Completed(true);
			}
		}
		keepRepository.save(keep);
	}
}
