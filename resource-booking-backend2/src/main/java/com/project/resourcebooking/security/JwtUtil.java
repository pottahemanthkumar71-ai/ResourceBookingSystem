package com.project.resourcebooking.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

public class JwtUtil {

    private static final String SECRET =
            "ResourceBookingSecretKey12345678901234567890";

    private static final Key KEY =
            Keys.hmacShaKeyFor(SECRET.getBytes());

    public static String generateToken(
            String email,
            String role) {

        return Jwts.builder()
                .setSubject(email)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                        + 86400000))
                .signWith(KEY, SignatureAlgorithm.HS256)
                .compact();
    }
}