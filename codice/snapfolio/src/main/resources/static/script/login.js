function login(){
    var email = $("#email").val();
    var psw = $("#password").val();
    var encryptedPsw = CryptoJS.MD5(psw).toString();
    $.get("/login", {codice: cod, password: encryptedPsw }, function (data) {
        if (data["status"] == "ok"){
            window.location.href = "/dashboard";
        }
        else
            alert(data["message"]);
    });
}