function initializeSlideshow(slideshowSelector) {
    let currentSlide = 0;
    const slides = document.querySelectorAll(slideshowSelector + ' .slideshow-image');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Initial display of the first slide
    showSlide(currentSlide);

    // Set the interval for the slideshow
    setInterval(nextSlide, 5000); // Change slide every 10 seconds
}

// Initialize slideshows for both sections
initializeSlideshow('#who-we-are-looking-for');
initializeSlideshow('#what-makes-us-different'); // Replace with the actual ID of Section 3
