package com.allservicehub.dao;


import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.allservicehub.model.Login;

@Repository
public interface LoginDao extends 	CrudRepository<Login, Integer>{
	

}
