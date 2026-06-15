package com.project.resourcebooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.resourcebooking.entity.User;
import com.project.resourcebooking.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository repository;

    @GetMapping
    public List<User> getAllUsers() {

        return repository.findAll();

    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {

        repository.deleteById(id);

    }
}