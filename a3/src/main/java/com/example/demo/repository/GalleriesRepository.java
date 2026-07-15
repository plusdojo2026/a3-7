package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Garalley;

public interface GalleriesRepository extends JpaRepository<Garalley, Integer> {

}
