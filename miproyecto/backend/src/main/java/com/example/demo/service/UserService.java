package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.model.UserModel;
import com.example.demo.repo.UserInterface;

import java.util.ArrayList;
import java.util.Optional;

import  org.springframework.beans.factory.annotation.Autowired;
@Service
public class UserService {
	@Autowired
 UserInterface userRepository;
	 public ArrayList<UserModel>getusers(){
		 return(ArrayList<UserModel>) userRepository.findAll();
	 }
	 
	 public UserModel saveUsers(UserModel user) {
		 
		 return userRepository.save(user);
	 }
	 public Optional<UserModel>getById(Long id){
		 return this.userRepository.findById(id);
		 
		 
	 }
	 public UserModel updateById(UserModel request, Long id) {
		 UserModel user=userRepository.findById(id).get();
		user.setFirsname(request.getFirsname()); 
		user.setLastname(request.getLastname()); 
		user.setEmail(request.getEmail()); 	
		return userRepository.save(user);
	 }
	 public Boolean deleteUser(Long id) {
		 try {
			 userRepository.deleteById(id);
return true;			 
		 }
		 catch(Exception e) {}
		 return false;
	 }
}

