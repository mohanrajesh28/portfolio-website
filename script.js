// ===========================
// Smooth Scroll Navigation
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===========================
// Intersection Observer for Fade-in Animation
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project items
document.querySelectorAll('.project-item').forEach(item => {
    observer.observe(item);
});

// Observe gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});

// ===========================
// Button Click Handlers
// ===========================
const moreWorkBtn = document.querySelector('.btn-more-work');
if (moreWorkBtn) {
    moreWorkBtn.addEventListener('click', () => {
        alert('More work coming soon! This would typically link to a projects page.');
        // You can replace this with: window.location.href = '/projects';
    });
}

const galleryBtn = document.querySelector('.btn-gallery');
if (galleryBtn) {
    galleryBtn.addEventListener('click', () => {
        alert('Full gallery coming soon! This would typically link to a gallery page.');
        // You can replace this with: window.location.href = '/gallery';
    });
}

const contactBtn = document.querySelector('.btn-contact');
if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        // You can replace this with a contact form or mailto link
        window.location.href = 'mailto:your-email@example.com';
    });
}

// ===========================
// Mobile Menu Toggle (Optional Enhancement)
// ===========================
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar .container');
    const navLinks = document.querySelector('.nav-links');

    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
        display: none;
        background: transparent;
        border: none;
        color: white;
        font-size: 28px;
        cursor: pointer;
        padding: 5px 10px;
    `;

    // Add hamburger to navbar
    navbar.insertBefore(hamburger, navLinks);

    // Toggle menu on mobile
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Show hamburger on mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMobile = (e) => {
        if (e.matches) {
            hamburger.style.display = 'block';
            navLinks.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(42, 42, 42, 0.98);
                flex-direction: column;
                padding: 20px;
                gap: 20px;
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
            `;
        } else {
            hamburger.style.display = 'none';
            navLinks.style.cssText = '';
            navLinks.classList.remove('active');
        }
    };

    mediaQuery.addListener(handleMobile);
    handleMobile(mediaQuery);

    // Add active class styles
    const style = document.createElement('style');
    style.textContent = `
        .nav-links.active {
            max-height: 300px !important;
        }
    `;
    document.head.appendChild(style);
};

// Initialize mobile menu
createMobileMenu();

// ===========================
// Loading Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Project Item Hover Effect
// ===========================
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.background = 'rgba(255, 255, 255, 0.5)';
        item.style.padding = '40px 20px';
        item.style.borderRadius = '12px';
    });

    item.addEventListener('mouseleave', () => {
        item.style.background = 'transparent';
        item.style.padding = '40px 0';
        item.style.borderRadius = '0';
    });
});

// ===========================
// Gallery Modal (Optional Enhancement)
// ===========================
const createGalleryModal = () => {
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 9999;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `;

    const modalImg = document.createElement('img');
    modalImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    `;

    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // Open modal on gallery item click
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            modalImg.src = img.src;
            modal.style.display = 'flex';
        });
    });

    // Close modal on click
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
};

createGalleryModal();

// ===========================
// Console Log
// ===========================
console.log('Portfolio website loaded successfully! 🎨');
console.log('Design by MRKV');