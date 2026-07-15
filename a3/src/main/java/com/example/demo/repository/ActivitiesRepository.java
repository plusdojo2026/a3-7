package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Activity;

public interface ActivitiesRepository extends JpaRepository<Activity, Integer> {

}
