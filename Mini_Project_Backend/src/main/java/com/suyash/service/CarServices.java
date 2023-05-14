package com.suyash.service;

import java.util.List;


import com.suyash.model.Car;


public interface CarServices {
	void add(Car car);
	void modify(Car car);
	void removeByid(int id);
	Car getById(int id);
	List<Car> getAllByLocation(String Location);
	List<Car> getAll();
}
