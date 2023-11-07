package com.group01.be.services;

import com.group01.be.dto.SignUpRequest;
import com.group01.be.entities.User;

public interface AuthenticationService {
    User signup(SignUpRequest signUpRequest);
}
