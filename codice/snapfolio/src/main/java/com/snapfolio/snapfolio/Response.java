package com.snapfolio.snapfolio;

public class Response {
    public String status;
    public int codice;
    public String message;

    public Response(String status, int codice, String message) {
        this.status = status;
        this.codice = codice;
        this.message = message;
    }
}
