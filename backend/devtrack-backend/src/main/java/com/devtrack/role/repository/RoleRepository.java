package com.devtrack.role.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devtrack.role.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}