package com.allservicehub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.allservicehub.model.Payment;
import com.allservicehub.service.PaymentService;

@RestController
@CrossOrigin
public class PaymentController {
	
	@Autowired
	private PaymentService paymentService;
	
	@PostMapping(value= {"/payment"})
	public String addPayment(@RequestBody Payment payment) {
		
		paymentService.add(payment);
		return "success";
	}
}
