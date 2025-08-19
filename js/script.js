
// 1. Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 2. Typing animation for the hero section
const textElement = document.getElementById('typing-text');
const texts = [" MERN-Stack Developer", " Fresher", "Problem Solver"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[textIndex];
    if (!isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex < currentText.length) {
            setTimeout(typeText, 150); // Typing speed
        } else {
            setTimeout(() => {
                isDeleting = true;
                setTimeout(typeText, 50);
            }, 1000); 
        }
    } else {
        // Delete a character
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex > 0) {
            setTimeout(typeText, 50); // Deleting speed
        } else {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeText, 500); 
        }
    }
}

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    typeText();
});
