package com.suyash.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.suyash.dao.UserDao;
import com.suyash.model.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;

	@Override
	public void add(User user) {
		// TODO Auto-generated method stub
		userDao.save(user);
		
	}

	@Override
	public void removeByid(int id) {
		// TODO Auto-generated method stub
		userDao.deleteById(id);
	}

	@Override
	public User getById(int id) {
		// TODO Auto-generated method stub
		Optional<User> opt = userDao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}
	
	

	@Override
	public boolean existsByid(int id) {
		// TODO Auto-generated method stub
		return userDao.existsById(id);
	}

	@Override
	public List<User> getAll() {
		// TODO Auto-generated method stub
		Iterable<User> itr = userDao.findAll();
		List<User> lst = new ArrayList<User>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

}
