package com.snapfolio.snapfolio;
import java.sql.SQLException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import jakarta.servlet.http.HttpSession;

@RestController
public class MyController{
    private GestioneUtenti gestioneUser = new GestioneUtenti();

    //richiesta di login
    @GetMapping("/checkLogin")
    public Response checkLogin(@RequestParam(value = "email", required = true) String email, @RequestParam(value = "password", required = true) String password){
        //controllo parametri
        if (!email.equals("") && !password.equals("")){
            //controllo credenziali
            int id = gestioneUser.checkCredentials(email, password);
            //se id=0 admin
            //se id=1 utente
            sessionLogin(id);
            return new Response("ok", id, "Successo");
        }
        return new Response("ko", -1, "Credenziali non inserite");
    }

    public void sessionLogin(int id){
        //ottengo la sessione ( non devo più controllare i cookie... fa tutto lui!)
        HttpSession s = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest().getSession();
        //posso settare qualsiasi tipo di oggetto
        s.setAttribute("logged", true);
        s.setAttribute("id", id);
    }
}