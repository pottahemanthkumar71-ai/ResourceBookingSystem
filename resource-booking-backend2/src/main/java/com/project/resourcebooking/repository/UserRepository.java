package com.project.resourcebooking.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.resourcebooking.entity.User;

public interface UserRepository
        extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}