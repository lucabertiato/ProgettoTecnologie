package com.snapfolio.snapfolio;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class GestioneUtenti {
    private Connection connDB;

    // costruttore dove si crea la gestione al database
    public GestioneUtenti() {
        try {
            this.connDB = DriverManager.getConnection("jdbc:mysql://localhost:3306/snapfolio", "root", "");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Boolean insertUtente(String email, String password, String username) {
        try {
            // Inserimento utente nella tabella 'utenti'
            PreparedStatement query = connDB.prepareStatement("INSERT INTO utenti (email, username, password, admin) VALUES (?, ?, ?, 1)");
            query.setString(1, email);
            query.setString(2, username);
            query.setString(3, password);
    
            int result = query.executeUpdate();
            if (result > 0) {
                query.close();
                return true;
            } else {
                query.close();
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public int checkCredentials(String email, String password) {
        int id = -1;
        try {
            // preparazione query
            PreparedStatement query = connDB.prepareStatement("SELECT ID FROM utenti WHERE email=? AND password=?");
            query.setString(1, email);
            query.setString(2, password);
            // esecuzione
            ResultSet rs = query.executeQuery();
            // prendo i dati
            if (rs.next()) {
                id = rs.getInt("ID");
            }
            // chiudo esecuzione query
            query.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return id;
    }
}