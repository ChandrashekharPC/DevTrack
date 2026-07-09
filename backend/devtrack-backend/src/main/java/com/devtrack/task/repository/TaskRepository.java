package com.devtrack.task.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtrack.task.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
	long countByStatus(String status);

}