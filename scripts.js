document.querySelector('#apply-now').addEventListener('click', () => {
    window.location.href = '#current-openings';
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const position = section.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            section.style.transition = 'transform 0.5s ease-in-out';
            section.style.transform = 'scale(1.05)';
        } else {
            section.style.transform = 'scale(1)';
        }
    });
});
