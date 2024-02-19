package com.allservicehub.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.allservicehub.model.Payment;

@Repository
public interface PaymentDao extends CrudRepository<Payment, Integer>{

}
