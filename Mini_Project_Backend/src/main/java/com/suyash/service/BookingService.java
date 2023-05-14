package com.suyash.service;

import java.util.List;

import com.suyash.model.Booking;

public interface BookingService {
	void add(Booking booking);
	void removeByid(int id);
	Booking getById(int id);
	Booking getByEmail(String email);
	List<Booking> getAll();
}
