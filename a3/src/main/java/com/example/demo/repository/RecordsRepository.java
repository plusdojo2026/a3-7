package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Record;

public interface RecordsRepository extends JpaRepository<Record, Integer> {

}
