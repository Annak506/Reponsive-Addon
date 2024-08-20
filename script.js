// Select all "Lees verder" and "Inklappen" buttons
const leesMeerButtons = document.querySelectorAll('.leesMeerBtn');
const inklapButtons = document.querySelectorAll('.inklapBtn');

// Add click event listeners to "Lees verder" buttons
leesMeerButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the parent element of the button to limit the scope of querySelector
        const cardBody = this.closest('.card-body');
        const gridContainer = this.closest('.grid');

        if (gridContainer) {
            gridContainer.classList.remove('grid-3-columns');
            gridContainer.classList.add('full-width');
        }

        // Show all extraText elements within the same cardBody
        const extraTexts = cardBody.querySelectorAll('.extraText');
        extraTexts.forEach(text => text.style.display = 'block');
        // Hide the "Lees verder" button
        this.style.display = 'none';
        // Show the "Inklappen" button
        cardBody.querySelector('.inklapBtn').style.display = 'inline';
        
        // Get the blog id from the button's data-id attribute
        const blogId = this.getAttribute('data-id');
        const blogElement = document.getElementById(blogId);

        // Scroll to the blog element if it exists
        if (blogElement) {
            blogElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add click event listeners to "Inklappen" buttons
inklapButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the parent element of the button to limit the scope of querySelector
        const cardBody = this.closest('.card-body');
        const gridContainer = cardBody.closest('.grid');

        if (gridContainer && gridContainer.classList.contains('full-width')) {
            gridContainer.classList.remove('full-width');
            gridContainer.classList.add('grid-3-columns');
        }

        // Hide all extraText elements within the same cardBody
        const extraTexts = cardBody.querySelectorAll('.extraText');
        extraTexts.forEach(text => text.style.display = 'none');
        // Hide the "Inklappen" button
        this.style.display = 'none';

        // Show the "Lees verder" button
        cardBody.querySelector('.leesMeerBtn').style.display = 'inline';
        
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
