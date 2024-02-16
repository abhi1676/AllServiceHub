package com.digirojgar.dao;


import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.digirojgar.model.Login;

@Repository
public interface LoginDao extends 	CrudRepository<Login, Integer>{
	

}
