package com.group01.be.dto;

import lombok.Data;

@Data
public class JwtAuthenticationReponse {
    private String token;

    private String refreshToken;
}
