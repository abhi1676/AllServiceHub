package com.digirojgar.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Payment {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String cardHolName;
	private String cardNo;
	private String expDate;
	private String cvv;
	private String repName;
	private String repEmail;
	public Payment() {
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCardHolName() {
		return cardHolName;
	}
	public void setCardHolName(String cardHolName) {
		this.cardHolName = cardHolName;
	}
	public String getCardNo() {
		return cardNo;
	}
	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}
	public String getExpDate() {
		return expDate;
	}
	public void setExpDate(String expDate) {
		this.expDate = expDate;
	}
	public String getCvv() {
		return cvv;
	}
	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	public String getRepName() {
		return repName;
	}
	public void setRepName(String repName) {
		this.repName = repName;
	}
	public String getRepEmail() {
		return repEmail;
	}
	public void setRepEmail(String repEmail) {
		this.repEmail = repEmail;
	}
	
	

	
}
