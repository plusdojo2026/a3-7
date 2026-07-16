package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Icon;

public interface IconsRepository extends JpaRepository<Icon, Integer> {

}
