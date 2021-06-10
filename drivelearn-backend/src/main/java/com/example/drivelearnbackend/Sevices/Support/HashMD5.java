package com.example.drivelearnbackend.Sevices.Support;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class HashMD5 {
    public String giveHash(String pass) throws NoSuchAlgorithmException {
        String testString="someText";
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] messageDigest = md.digest(testString.getBytes());
        BigInteger number = new BigInteger(1, messageDigest);
        return number.toString();
    }
}
