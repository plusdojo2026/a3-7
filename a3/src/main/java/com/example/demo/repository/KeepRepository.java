package com.example.demo.repository;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Keep;
import com.example.demo.entity.User;

public interface KeepRepository extends JpaRepository<Keep, Integer> {
	
	Keep findByUserId(Integer user_id);

	Keep findByUserIdAndDate(Integer user_id, LocalDate date);
	
	Optional<Keep> findByUser(User user);
	
	Optional<Keep> findByUserAndDate(User user, LocalDate date);
	
}