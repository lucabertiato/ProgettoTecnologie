function doLogin() {
    console.log("doLogin() chiamata");
    var email = $('#email').val();
    var password = $('#password').val();
    //controllo campi
    if (email === "" || password === "") {
      alert("Per favore, compila tutti i campi.");
      return;
    }
    //richiesta
    $.ajax({
      url: '/checkLogin',
      type: 'GET',
      data: {
        email: email,
        password: password
      },
      success: function(response) {
        // Gestisci la risposta del server
        if (response.status == "ok") {
          window.location.href = '/dashboard';
        } else {
          alert(response.message);
        }
      },
      error: function(error) {
        alert("Si è verificato un errore durante il login. Riprova.");
      }
    });
  }
  