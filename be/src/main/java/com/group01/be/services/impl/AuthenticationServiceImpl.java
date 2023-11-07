package com.group01.be.services.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.group01.be.dto.SignUpRequest;
import com.group01.be.entities.Role;
import com.group01.be.entities.User;
import com.group01.be.repository.UserRepo;
import com.group01.be.services.AuthenticationService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepo userRepo;

    private final PasswordEncoder passwordEncoder;

    public User signup(SignUpRequest signUpRequest) {
        User user = new User();

        user.setEmail(signUpRequest.getEmail());
        user.setFullname(signUpRequest.getFullname());
        user.setRole(Role.USER);
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        return userRepo.save(user);
    }
}
