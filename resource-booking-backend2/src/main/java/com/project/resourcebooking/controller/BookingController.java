package com.project.resourcebooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.resourcebooking.entity.Booking;
import com.project.resourcebooking.repository.BookingRepository;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

    @Autowired
    private BookingRepository repository;

    @GetMapping
    public List<Booking> getBookings() {
        return repository.findAll();
    }

    @PostMapping
    public Booking addBooking(@RequestBody Booking booking) {

        // Check for existing booking
        List<Booking> existingBookings =
                repository.findByResourceNameAndDate(
                        booking.getResourceName(),
                        booking.getDate()
                );

        if (!existingBookings.isEmpty()) {

            throw new RuntimeException(
                    "⚠️ Resource already booked for this date"
            );
        }

        return repository.save(booking);
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        repository.deleteById(id);
    }
}