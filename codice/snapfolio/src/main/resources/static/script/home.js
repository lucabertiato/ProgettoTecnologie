$(document).ready(function() {
    caricaImmaginiInEvidenza();
});

function caricaImmaginiInEvidenza() {
    const categories = ['nature', 'city', 'people', 'animals', 'art', 'sports', 'technology', 'food'];
    categories.forEach((category, index) => {
        const imgElement = $(`#image${index + 1}`);
        //con la data resta univoca la richiesta
        const url = `https://source.unsplash.com/random/?${category}&t=${new Date().getTime()}`;
        // Rimuovi l'attributo src prima di impostare il nuovo URL
        imgElement.removeAttr('src').attr('src', url);
    });
}
