document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for Scroll Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            } else {
                // If we want it to hide again when scrolling up, remove the class
                entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    // Grab all elements to be animated on scroll
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    console.log("NexaVolt JavaScript initialized. Ready to render animations.");
});
