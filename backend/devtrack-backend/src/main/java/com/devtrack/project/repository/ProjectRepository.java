package com.devtrack.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtrack.project.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}