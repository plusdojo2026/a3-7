package com.example.demo.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.Record;
import com.example.demo.entity.User;

public interface RecordsRepository extends JpaRepository<Record, Integer> {

    @Query(value = """
            SELECT COUNT(*)
            FROM records
            WHERE user_id = :user_id
            AND date >= :startDate
            AND date < :endDate
            """, nativeQuery = true)
    Integer count(@Param("user_id") Integer user_id,
                  @Param("startDate") LocalDate startDate,
                  @Param("endDate") LocalDate endDate);

    //Optional<Record> findByUserAndDate(User user, LocalDate date);

    // 日付で一覧取得
    List<Record> findByDate(LocalDate date);
    List<Record> findByUserAndDate(User user, LocalDate date);
}