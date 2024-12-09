package com.example.demo.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.UserModel;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500") 
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping
	public ArrayList<UserModel> getusers(){
		
		return this.userService.getusers();
	}
	@CrossOrigin("http://127.0.0.1:5500")
	@PostMapping
	public UserModel saveUser(@RequestBody UserModel user) {
		return this.userService.saveUsers(user);
	}
	@GetMapping(path="/{id}")
	public Optional<UserModel>getUserById(@PathVariable("id")Long id){
		return this.userService.getById(id);
		
	}
	@CrossOrigin("http://127.0.0.1:5500")
	@PutMapping(path="/{id}")
	public UserModel updateuserById(@RequestBody UserModel request,@PathVariable Long id) {
		return this.userService.updateById(request, id);
		
	}
	@DeleteMapping(path="/{id}")
	public String deleteby(@PathVariable("id")Long id) {
		
		boolean ok=this.userService.deleteUser(id);
		if(ok) {
			return "Usuario de id "+id+" eliminado";
		}else {
			return "Error al intentar eliminar el usuario";
		}
	}

}
