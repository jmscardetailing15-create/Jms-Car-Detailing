// Document Ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('JMS Car Detailing website loaded');

    // Mobile menu toggle
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header .container').appendChild(menuToggle);

    const nav = document.querySelector('header nav ul');
    menuToggle.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Newsletter form validation
    const newsletterForm = document.querySelector('#newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (validateEmail(email)) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Initialize lightbox if on gallery page
    if (document.querySelector('.gallery-item')) {
        initLightbox();
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Lightbox functionality
function initLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" id="lightbox-img">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    // Add click events to gallery images
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Close when clicking outside image
    lightbox.addEventListener('click', function(e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
}

// Form validation for contact page
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all required fields.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}
