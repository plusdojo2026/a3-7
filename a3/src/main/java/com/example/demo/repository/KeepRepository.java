package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Keep;

public interface KeepRepository extends JpaRepository<Keep, Integer> {

}
