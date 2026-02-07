// Smooth Scroll for Anchor Links
const smoothScroll = (target) => {
    const scrollTo = document.querySelector(target);
    if (scrollTo) {
        scrollTo.scrollIntoView({
            behavior: 'smooth'
        });
    }
};

// Mobile Menu Toggle
const mobileMenuToggle = () => {
    const menu = document.querySelector('.mobile-menu');
    const toggleButton = document.querySelector('.menu-toggle');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
};

// Header Scroll Effects
const headerScrollEffect = () => {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};

// Button Hover Animations
const buttonHoverAnimations = () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('hovered');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('hovered');
        });
    });
};

// Lazy Loading for Images
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(image => {
        imageObserver.observe(image);
    });
};

// Initialize Functions
document.addEventListener('DOMContentLoaded', () => {
    smoothScroll('a[href^="#"]'); // Applies to all anchor links
    mobileMenuToggle();
    headerScrollEffect();
    buttonHoverAnimations();
    lazyLoadImages();
});