// script/home.js
$(document).ready(function() {
    caricaImmaginiInEvidenza();
});

function caricaImmaginiInEvidenza() {
    const categories = ['nature', 'city', 'people', 'animals', 'art', 'sports', 'tecnology', 'food'];
    
    categories.forEach((category, index) => {
        const url = `https://source.unsplash.com/random/?${category}`;
        $(`#image${index + 1}`).attr('src', url);
    });
}
