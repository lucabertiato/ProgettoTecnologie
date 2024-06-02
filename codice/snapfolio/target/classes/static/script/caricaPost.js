$(document).ready(function() {
    // Carica un'immagine iniziale dall'API di Unsplash
    caricaImmagineIniziale();

    // Gestisci il submit del form
    $('#post-form').submit(function(event) {
        event.preventDefault(); // Impedisce il comportamento predefinito del submit

        // Ottieni l'URL dell'immagine inserito dall'utente
        const imageUrl = $('#image-url').val();

        // Ottieni la descrizione inserita dall'utente
        const description = $('#description').val();

        // Esegui una funzione per caricare il post con l'immagine e la descrizione
        caricaPost(imageUrl, description);
    });
});

function caricaImmagineIniziale() {
    const url = 'https://source.unsplash.com/random/';

    // Imposta l'URL dell'immagine
    $('#image-url').val(url);

    // Mostra l'immagine nell'HTML
    $('#image-preview').attr('src', url);
}

