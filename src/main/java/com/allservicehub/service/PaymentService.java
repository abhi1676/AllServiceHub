package com.allservicehub.service;

import org.springframework.stereotype.Service;

import com.allservicehub.model.Payment;

@Service
public interface PaymentService {
	
	void add(Payment payment);
}
