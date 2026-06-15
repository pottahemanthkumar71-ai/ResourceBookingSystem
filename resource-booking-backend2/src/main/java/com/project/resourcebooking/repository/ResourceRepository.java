package com.project.resourcebooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.resourcebooking.entity.Resource;

public interface ResourceRepository
        extends JpaRepository<Resource, Long> {

}