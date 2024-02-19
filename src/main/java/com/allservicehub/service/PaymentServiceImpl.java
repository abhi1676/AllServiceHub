package com.allservicehub.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allservicehub.dao.PaymentDao;
import com.allservicehub.model.Payment;

@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentDao paymentDao;
	
	
	@Override
	public void add(Payment payment) {
		paymentDao.save(payment);
	}

}
