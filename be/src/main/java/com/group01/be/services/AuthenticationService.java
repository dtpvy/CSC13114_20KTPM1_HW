package com.group01.be.services;

import com.group01.be.dto.JwtAuthenticationReponse;
import com.group01.be.dto.RefreshTokenRequest;
import com.group01.be.dto.SignInRequest;
import com.group01.be.dto.SignUpRequest;
import com.group01.be.entities.User;

public interface AuthenticationService {
    User signup(SignUpRequest signUpRequest);

    JwtAuthenticationReponse signin(SignInRequest signInRequest);

    JwtAuthenticationReponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
