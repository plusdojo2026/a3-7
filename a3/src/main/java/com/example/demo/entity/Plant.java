package com.example.demo.entity;

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
@Table(name="plants")
public class Plant {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	private Integer id;
	//private Integer user_id;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id")
	@JsonIgnore
	private User user;
	
	private Integer count;
}
