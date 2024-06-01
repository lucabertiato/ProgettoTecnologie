// script/profilo.js
$(document).ready(function() {
    // Carica i post dell'utente
    caricaMieiPost();

    // Carica le categorie preferite dell'utente
    caricaCategoriePreferite();

    // Gestione del submit del form per aggiungere una categoria preferita
    $('#add-category-form').submit(function(event) {
        event.preventDefault();
        const category = $('#category').val();
        aggiungiCategoriaPreferita(category);
    });
});

function caricaMieiPost() {
    // Simulazione del caricamento dei post dell'utente
    const posts = [
        { id: 1, titolo: 'Post 1', contenuto: 'Contenuto del Post 1' },
        { id: 2, titolo: 'Post 2', contenuto: 'Contenuto del Post 2' },
        { id: 3, titolo: 'Post 3', contenuto: 'Contenuto del Post 3' }
    ];

    // Visualizza i post nell'HTML
    const $postsList = $('#posts-list');
    posts.forEach(post => {
        $postsList.append(`<div class="post"><h3>${post.titolo}</h3><p>${post.contenuto}</p></div>`);
    });
}

function caricaCategoriePreferite() {
    // Simulazione del caricamento delle categorie preferite dell'utente
    const categories = ['natura', 'viaggi', 'cibo'];

    // Visualizza le categorie nell'HTML
    const $categoriesList = $('#categories-list');
    categories.forEach(category => {
        $categoriesList.append(`<li>${category}</li>`);
    });
}

function aggiungiCategoriaPreferita(category) {
    // Simulazione dell'aggiunta di una categoria preferita
    const $categoriesList = $('#categories-list');
    $categoriesList.append(`<li>${category}</li>`);

    // Resetta il campo di input
    $('#category').val('');
}
