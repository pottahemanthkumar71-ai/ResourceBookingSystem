package com.project.resourcebooking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.resourcebooking.entity.Booking;

public interface BookingRepository
extends JpaRepository<Booking, Long> {

    List<Booking> findByResourceNameAndDate(
        String resourceName,
        String date
    );

}