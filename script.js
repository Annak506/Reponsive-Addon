
const leesMeerButtons = document.querySelectorAll('.leesMeerBtn');
const inklapButtons = document.querySelectorAll('.inklapBtn');


leesMeerButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cardBody = this.closest('.card-body');
        const gridContainer = this.closest('.grid');

        // wanneer iemand klikt op verder lezen bij een blog, zien ze de blog full-screen
        if (gridContainer) {
            gridContainer.classList.remove('grid-3-columns');
            gridContainer.classList.add('full-width');
        }

       //  alle tekst getoond
        const extraTexts = cardBody.querySelectorAll('.extraText');
        extraTexts.forEach(text => text.style.display = 'block');
        // verberg de lees veder knop
        this.style.display = 'none';
        // laat in plaats daarvan de inklap knop zien
        cardBody.querySelector('.inklapBtn').style.display = 'inline';
        
       
        const blogId = this.getAttribute('data-id');
        const blogElement = document.getElementById(blogId);

        // scroll naar het begin van de blog
        if (blogElement) {
            blogElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


inklapButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cardBody = this.closest('.card-body');
        const gridContainer = cardBody.closest('.grid');

        // na het lezen van de blog weer terug naar de website waar de blogs in kolommen worden getoond
        if (gridContainer && gridContainer.classList.contains('full-width')) {
            gridContainer.classList.remove('full-width');
            gridContainer.classList.add('grid-3-columns');
        }

        // verberg de lange tekst
        const extraTexts = cardBody.querySelectorAll('.extraText');
        extraTexts.forEach(text => text.style.display = 'none');
        // verberg de inklap knop
        this.style.display = 'none';

        // laat de lees verder knop weer zien
        cardBody.querySelector('.leesMeerBtn').style.display = 'inline';
        
        // toon de blogs weer vanaf de fotos
        const cardHeader = cardBody.previousElementSibling;
        if (cardHeader && cardHeader.classList.contains('card-header')) {
            cardHeader.scrollIntoView({ behavior: 'smooth' });
        }
    });


});

window.onload = function() {
    var extraTexts = document.querySelectorAll('.extraText');
    extraTexts.forEach(function (p) {
        p.style.display = 'none';
    });
    var inklapBtns = document.querySelectorAll('.inklapBtn');
    inklapBtns.forEach(function(btn) {
        btn.style.display = 'none';
    });
}
