// script.js - Updated version

// ScrollReveal Animations
ScrollReveal().reveal(".social", {
    delay: 100,
    origin: 'right',
    distance: '20px',
    duration: 300
});

ScrollReveal().reveal(".token1, .token2, .token3", {
    delay: 100,
    origin: 'right',
    distance: '200px',
    duration: 500
});

ScrollReveal().reveal(".main-head", {
    delay: 100,
    origin: 'left',
    distance: '200px',
    duration: 300
});

ScrollReveal().reveal(".main-logo", {
    delay: 100,
    origin: 'right',
    distance: '200px',
    duration: 300
});

// Mobile Menu Toggle with animation
function toggleMenu() {
    const navbar = document.getElementById("navbar-default");
    if (navbar.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
        navbar.style.display = "block";
    } else {
        navbar.classList.add('hidden');
        navbar.style.display = "none";
    }
}

// Improved copy function with timeout
function changeCopyText(button) {
    const originalText = button.textContent;
    button.textContent = "copied!";
    button.style.background = "#10B981"; // Green color for success
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = ""; // Reset to original
    }, 2000);
}

// Close mobile menu when clicking on links
document.addEventListener('DOMContentLoaded', function() {
    // Close mobile menu when link is clicked
    const navLinks = document.querySelectorAll('#navbar-default a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbar = document.getElementById("navbar-default");
            if (window.innerWidth < 768) { // Only on mobile
                navbar.classList.add('hidden');
                navbar.style.display = "none";
            }
        });
    });
    
    // Clipboard Initialization
    new ClipboardJS(".js-clipboard");
});

// Handle window resize
window.addEventListener('resize', function() {
    const navbar = document.getElementById("navbar-default");
    if (window.innerWidth >= 768) {
        navbar.classList.remove('hidden');
        navbar.style.display = "flex";
    } else {
        if (!navbar.classList.contains('hidden')) {
            navbar.style.display = "none";
        }
    }
});