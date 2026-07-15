package com.example.demo.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="keeps")
public class Keep {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	private Integer id;
	//private Integer user_id;
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id")
	@JsonIgnore
	private User user;
	
	private LocalDate date;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="suggest1_id")
	private Activity suggest1;
	//private Integer suggest1_id;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="suggest2_id")
	private Activity suggest2;
	//private Integer suggest2_id;
	
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="suggest3_id")
	private Activity suggest3;
	//private Integer suggest3_id;

}
