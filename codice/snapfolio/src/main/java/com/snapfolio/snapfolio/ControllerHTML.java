package com.snapfolio.snapfolio;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class ControllerHTML {

    // Metodo per verificare se l'utente ha fatto il login
    private boolean isLoggedIn(HttpSession session) {
        return session.getAttribute("logged") != null && (boolean) session.getAttribute("logged");
    }

    @GetMapping("/login")
    public String goToLogin(HttpSession session) {
        // Se ho fatto il login e il tipo è 1 (admin), reindirizza alla pagina dashboard
        if (!isLoggedIn(session))
            return "login";
        else
            return "dashboard";
    }

    @GetMapping("/home")
    public String goToHome(HttpSession session) {
        return "index";
    }

    @GetMapping("/dashboard")
    public String goToDash(HttpSession session) {
        if (isLoggedIn(session))
            return "dashboard";
        else
            return "index"; 
    }

    @GetMapping("/register")
    public String goToRegistrazione(HttpSession session) {  
        if (!isLoggedIn(session))
            return "registrazione";
        else
            return "dashboard";
    }

    @GetMapping("/profilo")
    public String goToProfilo(HttpSession session) {
        if (isLoggedIn(session))
            return "profilo";
        else
            return "index";
    }

    @GetMapping("/caricaPost")
    public String goToCaricaPost(HttpSession session) {
        if (isLoggedIn(session))
            return "newPost";
        else
            return "index"; 
    }
}
