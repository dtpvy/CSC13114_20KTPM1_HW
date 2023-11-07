package com.group01.be.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.group01.be.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

}
