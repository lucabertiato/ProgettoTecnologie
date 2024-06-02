package com.snapfolio.snapfolio;
import java.sql.SQLException;
import java.util.List;

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
            if(id != -1)
                return new Response("ok", id, "Successo");
            else
                return new Response("ko", id, "Le credenziali non coincidono");
        }
        return new Response("ko", -1, "Credenziali non inserite");
    }

    @GetMapping("/newUtente")
    public Response registrazione(@RequestParam(value = "email", required = true) String email, @RequestParam(value = "password", required = true) String password, 
    @RequestParam(value = "username", required = true) String username){
        //controllo parametri
        if (!email.equals("") && !password.equals("") && !username.equals("")){
            //controllo credenziali
            boolean result = gestioneUser.insertUtente(email, password, username);
            if(result)
                return new Response("ok", 400, "Successo");
            else
                return new Response("ko", 200, "Errore");
        }
        return new Response("ko", -1, "Credenziali non inserite");
    }

    @GetMapping("/getFoto")
    public Response getFoto(HttpSession session){
        //prendi id
        int id = getIDsession(session);
        //prendo le foto di questo utente
        gestioneUser.getFotoUtente(id);
        return null;
    }

    @GetMapping("/getCategorie")
    public List<Categoria> getCategorie(HttpSession session){
        //prendi id
        int id = getIDsession(session);
        //prendo le foto di questo utente
        List<Categoria> listaCategorie = gestioneUser.getCategorieUtente(id);
        return listaCategorie;
    }

    private int getIDsession(HttpSession session) {
        return (int) session.getAttribute("id");
    }

    public void sessionLogin(int id){
        //ottengo la sessione ( non devo più controllare i cookie... fa tutto lui!)
        HttpSession s = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest().getSession();
        //posso settare qualsiasi tipo di oggetto
        s.setAttribute("logged", true);
        s.setAttribute("id", id);
    }
}