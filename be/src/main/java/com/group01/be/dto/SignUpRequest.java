package com.group01.be.dto;

import lombok.Data;

@Data
public class SignUpRequest {
    private String fullname;

    private String email;

    private String password;
}
