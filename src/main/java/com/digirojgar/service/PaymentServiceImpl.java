package com.digirojgar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digirojgar.dao.PaymentDao;
import com.digirojgar.model.Payment;

@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentDao paymentDao;
	
	
	@Override
	public void add(Payment payment) {
		paymentDao.save(payment);
	}

}
