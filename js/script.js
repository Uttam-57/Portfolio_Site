
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
// 3. Contact Form Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            formStatus.textContent = "Thanks for your message! I'll get back to you soon.";
            formStatus.className = 'success';
            contactForm.reset();
        } else {
            const data = await response.json();
            if (Object.hasOwn(data, 'errors')) {
                formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
            } else {
                formStatus.textContent = "Oops! There was a problem submitting your form";
            }
            formStatus.className = 'error';
        }
    } catch (error) {
        formStatus.textContent = "Oops! There was a problem submitting your form";
        formStatus.className = 'error';
    }
});