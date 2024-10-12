// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

// When the user clicks on the button, scroll to the top
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



// Toggle sun and moon icons
document.getElementById('toggleTheme').addEventListener('click', function() {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    // Toggle visibility of the icons
    sunIcon.classList.toggle('d-none');
    moonIcon.classList.toggle('d-none');
});

// Toggle regular and solid bookmark icons
document.getElementById('toggleBookmark').addEventListener('click', function() {
    const bookmarkIcon = document.getElementById('bookmarkIcon');
    const solidBookmarkIcon = document.getElementById('solidBookmarkIcon');

    // Toggle visibility of the icons
    bookmarkIcon.classList.toggle('d-none');
    solidBookmarkIcon.classList.toggle('d-none');
});