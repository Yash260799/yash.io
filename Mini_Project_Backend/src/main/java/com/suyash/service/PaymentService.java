package com.suyash.service;

import java.util.List;

import com.suyash.model.Payment;

public interface PaymentService {
	void add(Payment payment);
	void removeByid(int id);
	Payment getById(int id);
	List<Payment> getAll();
}
