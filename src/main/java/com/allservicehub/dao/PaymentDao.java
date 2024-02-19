package com.digirojgar.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.digirojgar.model.Payment;

@Repository
public interface PaymentDao extends CrudRepository<Payment, Integer>{

}
