package com.allservicehub.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.allservicehub.model.Admin;
import com.allservicehub.model.PostJob;
import com.allservicehub.model.User;

@Repository
public interface AdminDao  extends JpaRepository<Admin, Integer>{
	
	public Admin findByEmail(@Param(value="email") String email);
}
