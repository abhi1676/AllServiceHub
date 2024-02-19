package com.digirojgar.service;

import org.springframework.stereotype.Service;

import com.digirojgar.model.Payment;

@Service
public interface PaymentService {
	
	void add(Payment payment);
}
