package com.group01.be.dto;

import lombok.Data;

@Data
public class SignInRequest {
    private String email;

    private String password;
}