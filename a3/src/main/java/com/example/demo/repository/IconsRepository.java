package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Icon;

public interface IconsRepository extends JpaRepository<Icon, Integer> {

	Optional<Icon> findById(Icon icon);

}
