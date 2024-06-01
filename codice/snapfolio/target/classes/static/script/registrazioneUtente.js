function insert() {
    var email = $("#email").val();
    var psw = $("#password").val();
    var username = $("#username").val();
    var psw1 = $("#confirm_password").val();

    if (psw != psw1) {
        alert("Le password non coincidono");
        return;
    }

    var hashedPassword = CryptoJS.MD5(psw).toString();

    $.ajax({
        url: '/newUtente',
        type: 'GET',
        data: {
            email: email,
            password: hashedPassword,
            username: username
        },
        success: function(data) {
            alert(data.message);
        },
        error: function(error) {
            alert("Si è verificato un errore durante la registrazione. Riprova.");
        }
    });
}
