package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Keep;
import com.example.demo.entity.User;

public interface KeepRepository extends JpaRepository<Keep, Integer> {

	Keep findByUserId(Integer user_id);
	
	Optional<Keep> findByUser(User user);
	
}