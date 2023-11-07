package com.group01.be.services.impl;

import java.util.HashMap;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.group01.be.dto.JwtAuthenticationReponse;
import com.group01.be.dto.RefreshTokenRequest;
import com.group01.be.dto.SignInRequest;
import com.group01.be.dto.SignUpRequest;
import com.group01.be.entities.Role;
import com.group01.be.entities.User;
import com.group01.be.repository.UserRepo;
import com.group01.be.services.AuthenticationService;
import com.group01.be.services.JwtService;

import lombok.RequiredArgsConstructor;
import lombok.var;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepo userRepo;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    public User signup(SignUpRequest signUpRequest) {
        User user = new User();

        user.setEmail(signUpRequest.getEmail());
        user.setFullname(signUpRequest.getFullname());
        user.setRole(Role.USER);
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        return userRepo.save(user);
    }

    public JwtAuthenticationReponse signin(SignInRequest signInRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInRequest.getEmail(), signInRequest.getPassword()));

        var user = userRepo.findByEmail(signInRequest.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        var jwt = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(new HashMap<>(), user);

        JwtAuthenticationReponse jwtAuthenticationReponse = new JwtAuthenticationReponse();

        jwtAuthenticationReponse.setToken(jwt);
        jwtAuthenticationReponse.setRefreshToken(refreshToken);

        return jwtAuthenticationReponse;
    }

    public JwtAuthenticationReponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
        String userEmail = jwtService.extractUserName(refreshTokenRequest.getToken());
        User user = userRepo.findByEmail(userEmail).orElseThrow();

        if (jwtService.isTokenValid(refreshTokenRequest.getToken(), user)) {
            var jwt = jwtService.generateToken(user);

            JwtAuthenticationReponse jwtAuthenticationReponse = new JwtAuthenticationReponse();

            jwtAuthenticationReponse.setToken(jwt);
            jwtAuthenticationReponse.setRefreshToken(refreshTokenRequest.getToken());

            return jwtAuthenticationReponse;
        }

        return null;
    }
}
