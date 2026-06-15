package com.project.resourcebooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.resourcebooking.entity.Resource;
import com.project.resourcebooking.repository.ResourceRepository;

@RestController
@RequestMapping("/api/resources")
@CrossOrigin(origins = "*")
public class ResourceController {

    @Autowired
    private ResourceRepository repository;

    @GetMapping
    public List<Resource> getResources() {
        return repository.findAll();
    }

    @PostMapping
    public Resource addResource(
            @RequestBody Resource resource) {

        return repository.save(resource);
    }

    @DeleteMapping("/{id}")
    public void deleteResource(
            @PathVariable Long id) {

        repository.deleteById(id);
    }
}