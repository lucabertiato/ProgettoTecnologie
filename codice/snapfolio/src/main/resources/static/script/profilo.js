$(document).ready(function() {
    // Richiedi foto e categorie quando la pagina è pronta
    getFoto();
    getCategorie();
});

function getFoto() {
    $.ajax({
        url: '/getFoto',
        method: 'GET',
        success: function(data) {
            if (data.length === 0) {
                displayNoPostsMessage();
            } else {
                displayPosts(data);
            }
        },
        error: function(error) {
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
        success: function(data) {
            displayCategories(data);
        },
        error: function(error) {
            console.error('Errore nel caricamento delle categorie:', error);
        }
    });
}

function displayCategories(categories) {
    const categoriesList = $('#categories-list');
    categoriesList.empty();
    categories.forEach(category => {
        const categoryElement = $('<li></li>');
        categoryElement.text(category.nome); // Aggiungo il nome della categoria
        categoriesList.append(categoryElement);
    });
}
