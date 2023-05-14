package com.suyash.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.suyash.model.User;

@Repository
public interface UserDao extends CrudRepository<User, Integer> {

}
