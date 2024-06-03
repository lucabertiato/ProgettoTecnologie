$(document).ready(function () {
    // Richiedi foto e categorie quando la pagina è pronta
    getFoto();
    getCategorie();
});

function getFoto() {
    $.ajax({
        url: '/getFoto',
        method: 'GET',
        success: function (data) {
            if (data.length === 0) {
                displayNoPostsMessage();
            } else {
                displayPosts(data);
            }
        },
        error: function (error) {
            console.error('Errore nel caricamento delle foto:', error);
        }
    });
}

function displayNoPostsMessage() {
    const postsList = $('#posts-list');
    postsList.empty();
    const messageElement = $('<div class="message"></div>');
    messageElement.text('Non hai nessun post. ');
    const linkElement = $('<a href="/caricaPost">Carica un post</a>');
    messageElement.append(linkElement);
    postsList.append(messageElement);
}


function displayPosts(posts) {
    const postsList = $('#posts-list');
    postsList.empty();
    posts.forEach(post => {
        const postElement = $('<div class="post"></div>');
        postElement.text(post);
        postsList.append(postElement);
    });
}

function getCategorie() {
    $.ajax({
        url: '/getCategorie',
        method: 'GET',
        success: function (data) {
            displayCategories(data);
        },
        error: function (error) {
            console.error('Errore nel caricamento delle categorie:', error);
        }
    });
}

function displayCategories(categories) {
    $('#categories-list').empty();
    categories.forEach(category => {
        const categoryElement = $('<li></li>');
        categoryElement.text(category.nome); // Aggiungo il nome della categoria
        $('#categories-list').append(categoryElement);
    });
}

function aggiungiCategoria() {
    const categoria = $('#category').val();

    if (categoria === '') {
        alert('Per favore, inserisci una categoria.');
        return;
    }
    //controllo la categoria
    checkCategoryWithUnsplash(categoria, function (isValid) {
        if (isValid) {
            addCategoryToDatabase(categoria);
        } else {
            alert('Categoria non valida. Per favore, inserisci una categoria valida.');
        }
    });
}

function checkCategoryWithUnsplash(category, callback) {
    let unsplashUrl = `https://source.unsplash.com/random/?${category}`;

    fetch(unsplashUrl)
        .then(response => callback(response.ok))
        .catch(error => {
            console.error('Errore durante la verifica della categoria con Unsplash:', error);
            callback(false);
        });
}

function addCategoryToDatabase(categoria){
    $.ajax({
        url: '/newCategoria',
        type: 'GET',
        data: {
            categoria: categoria
        },
        success: function(data) {
            alert(data.message);
            $('#category').val(''); // Resetta il campo di input
            getCategorie(); // Aggiorna le categorie solo dopo un inserimento corretto
        },
        error: function(error) {
            alert("Si è verificato un errore durante la registrazione. Riprova.");
        }
    });
}