package com.example.demo.repository;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.Record;
import com.example.demo.entity.User;

public interface RecordsRepository extends JpaRepository<Record, Integer> {

	@Query(value = "SELECT COUNT(*) AS user_id \n"
			+ "FROM Records \n"
			+ "WHERE user_id = :user_id \n"
			+ "AND date >= :startDate AND date < :endDate \n"
			,nativeQuery = true)
	Integer count(@Param("user_id") Integer user_id, @Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
	
	Optional<Record> findByUserAndDate(User user, LocalDate date);
}
