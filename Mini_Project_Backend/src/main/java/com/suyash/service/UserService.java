package com.suyash.service;

import java.util.List;

import com.suyash.model.User;



public interface UserService {
	void add(User user);
	void removeByid(int id);
	User getById(int id);
	boolean existsByid(int id);
	List<User> getAll();
}
