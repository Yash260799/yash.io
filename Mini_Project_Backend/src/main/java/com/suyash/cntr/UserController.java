package com.suyash.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.suyash.model.User;
import com.suyash.service.UserService;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(value = {"/user"})
	public String productAdd(@RequestBody User user) {
		userService.add(user);
		return "success";
	}
	
	@DeleteMapping(value = {"/user/{id}"})
	public String userDelete(@PathVariable int id) {
		userService.removeByid(id);
		return "success";
	}
	
	@GetMapping(value = {"/user/{id}"})
	public User userGet(@PathVariable int id) {
		return userService.getById(id);
	}
	
	@GetMapping(value = {"/user"})
	public List<User> userList(){
		return userService.getAll();
	}
	
	
	

}
