package com.allservicehub.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.allservicehub.model.ContactUs;

@Repository
public interface ContactUsDao  extends CrudRepository<ContactUs, Integer>{

}
