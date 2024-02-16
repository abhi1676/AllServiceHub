package com.digirojgar.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.digirojgar.model.ContactUs;

@Repository
public interface ContactUsDao  extends CrudRepository<ContactUs, Integer>{

}
