// Function to load images lazily
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const observerOptions = {
        root: null, // Observe viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the image is visible
    };

    const loadImage = (image) => {
        const src = image.getAttribute('data-src');
        if (!src) return;

        image.src = src; // Set the src attribute to load the image
        image.onload = () => image.classList.add('loaded'); // Add fade-in effect
        observer.unobserve(image); // Stop observing once loaded
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
            }
        });
    }, observerOptions);

    images.forEach(img => observer.observe(img));
}

// Load images only on button click
document.getElementById('load-images').addEventListener('click', lazyLoadImages);