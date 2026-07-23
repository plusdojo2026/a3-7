package com.example.demo.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Record;
import com.example.demo.entity.User;
import com.example.demo.repository.RecordsRepository;
import com.example.demo.repository.UsersRepository;

import jakarta.servlet.http.HttpSession;

@RestController
//@RequestMapping("/api/records")
public class RecordController {

    @Autowired
    private RecordsRepository recordsRepository;
    @Autowired
    private UsersRepository userRepository;
    
    @GetMapping("/api/records")
    public List<Record> getRecords (
            @RequestParam(required = false) LocalDate date, HttpSession session) {

        if (date == null) {
            date = LocalDate.now();
        }
        Integer id = (Integer) session.getAttribute("loginUserId");
		User user = userRepository.findById(id) .orElseThrow();
        System.out.println("検索日付：" + date);

        List<Record> list = recordsRepository.findByUserAndDate(user,date);

        System.out.println("取得件数：" + list.size());

        return list;
    }
}