package com.digirojgar.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.digirojgar.model.Admin;
import com.digirojgar.model.PostJob;
import com.digirojgar.model.User;

@Repository
public interface AdminDao  extends JpaRepository<Admin, Integer>{
	
	public Admin findByEmail(@Param(value="email") String email);
}
