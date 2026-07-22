package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Gallery;

public interface GalleriesRepository extends JpaRepository<Gallery, Integer> {

}

