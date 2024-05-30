package com.snapfolio.snapfolio;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class ControllerHTML {

    @GetMapping("/login")
    public String goToLogin(HttpSession session) {
        return "login";
    }

    @GetMapping("/home")
    public String goToHome(HttpSession session) {
        return "index"; 
    }

    @GetMapping("/register")
    public String goToRegistrazione(HttpSession session) {
        return "registrazione";
    }
}
