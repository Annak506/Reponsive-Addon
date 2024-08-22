document.addEventListener('DOMContentLoaded', () => {
    const leesMeerButtons = document.querySelectorAll('.leesMeerBtn');
    const inklapButtons = document.querySelectorAll('.inklapBtn');

    leesMeerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const cardBody = card.querySelector('.card-body');
            const gridContainer = card.closest('.grid');

            // Wanneer iemand klikt op verder lezen bij een blog, zien ze de blog full-screen
            if (gridContainer) {
                gridContainer.classList.remove('grid-3-columns');
                gridContainer.classList.add('full-width');
            }

            // Alle tekst getoond
            const extraTexts = cardBody.querySelectorAll('.extraText');
            extraTexts.forEach(text => text.style.display = 'block');

            // Verberg de lees verder knop
            this.style.display = 'none';

            // Laat in plaats daarvan de inklap knop zien
            card.querySelector('.inklapBtn').style.display = 'inline';

            // Scroll naar het begin van de blog
            card.scrollIntoView({ behavior: 'smooth' });
        });
    });

    inklapButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const cardBody = card.querySelector('.card-body');
            const gridContainer = card.closest('.grid');

            // Na het lezen van de blog weer terug naar de website waar de blogs in kolommen worden getoond
            if (gridContainer && gridContainer.classList.contains('full-width')) {
                gridContainer.classList.remove('full-width');
                gridContainer.classList.add('grid-3-columns');
            }

            // Verberg de lange tekst
            const extraTexts = cardBody.querySelectorAll('.extraText');
            extraTexts.forEach(text => text.style.display = 'none');

            // Verberg de inklap knop
            this.style.display = 'none';

            // Laat de lees verder knop weer zien
            card.querySelector('.leesMeerBtn').style.display = 'inline';

            // Toon de blogs weer vanaf de foto's
            card.querySelector('.card-header').scrollIntoView({ behavior: 'smooth' });
        });
    });

    let hettyIndex = 0;
    let annaIndex = 0;

    function showSlide(slides, index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[index].style.display = "block";
    }

    function setupSlideshow(slideshowClass, prevBtnClass, nextBtnClass) {
        let slides = document.querySelectorAll(slideshowClass + " img");
        let index = 0;

        showSlide(slides, index);

        document.querySelector(prevBtnClass).addEventListener('click', function() {
            index = (index > 0) ? index - 1 : slides.length - 1;
            showSlide(slides, index);
        });

        document.querySelector(nextBtnClass).addEventListener('click', function() {
            index = (index < slides.length - 1) ? index + 1 : 0;
            showSlide(slides, index);
        });
    }

    setupSlideshow(".hetty-slide", ".hetty-prev", ".hetty-next");
    setupSlideshow(".anna-slide", ".anna-prev", ".anna-next");

    var extraTexts = document.querySelectorAll('.extraText');
    extraTexts.forEach(function(p) {
        p.style.display = 'none';
    });

    var inklapBtns = document.querySelectorAll('.inklapBtn');
    inklapBtns.forEach(function(btn) {
        btn.style.display = 'none';
    });
});
