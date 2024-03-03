package com.hotelmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class EmailService {
	
	
    @Autowired
    private JavaMailSender emailSender;

    public void sendThankYouEmail(String toEmail) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Thank you for registering! " );
        message.setText("Dear User,\n\nThank you for registering with BookEase. We appreciate your business.\n\nBest regards,\nBookEase");

        emailSender.send(message);
    }
}

