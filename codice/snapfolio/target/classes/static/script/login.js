function doLogin() {
  var email = $('#email').val();
  var password = $('#password').val();
  
  if (email === "" || password === "") {
    alert("Per favore, compila tutti i campi.");
    return;
  }
  
  var hashedPassword = CryptoJS.MD5(password).toString();

  $.ajax({
    url: '/checkLogin',
    type: 'GET',
    data: {
      email: email,
      password: hashedPassword
    },
    success: function(response) {
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
