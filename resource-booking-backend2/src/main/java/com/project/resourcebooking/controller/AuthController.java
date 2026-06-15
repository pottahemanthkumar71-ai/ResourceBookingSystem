package com.project.resourcebooking.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.resourcebooking.entity.User;
import com.project.resourcebooking.repository.UserRepository;
import com.project.resourcebooking.security.JwtUtil;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserRepository repository;

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {

        if(user.getRole() == null) {
            user.setRole("USER");
        }

        return repository.save(user);
    }

    @PostMapping("/login")
    public Map<String, String> login(
            @RequestBody User user) {

        User dbUser =
                repository.findByEmail(
                        user.getEmail())
                        .orElse(null);

        if(dbUser == null) {
            throw new RuntimeException(
                    "User Not Found");
        }

        if(!dbUser.getPassword()
                .equals(user.getPassword())) {

            throw new RuntimeException(
                    "Invalid Password");
        }

        String token =
                JwtUtil.generateToken(
                        dbUser.getEmail(),
                        dbUser.getRole());

        Map<String, String> response =
                new HashMap<>();

        response.put("token", token);
        response.put("role", dbUser.getRole());
        response.put("email", dbUser.getEmail());

        return response;
    }
}