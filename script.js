// 1. Active Link Highlight saat Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                const targetLink = document.querySelector('header nav ul li a[href*=' + id + ']');
                if (targetLink) targetLink.classList.add('active');
            });
        }
    });
};

// 2. Typing Effect pada Teks Hero
const dynamicText = document.querySelector('.typing-text');
const textArray = [
    "I'm a professional Web Developer.",
    "Specialized in Front-End & Back-End Solutions.",
    "Building modern & responsive web applications."
];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        dynamicText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 50);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        dynamicText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 30);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (dynamicText) {
        dynamicText.textContent = "";
        typeEffect();
    }
});

// 3. Interaksi Kartu 3D Tilt Effect
const cardContainer = document.querySelector('.hero-card-container');
const card = document.getElementById('tiltCard');

if (cardContainer && card) {
    card.classList.add('floating');

    cardContainer.addEventListener('mousemove', (e) => {
        card.classList.remove('floating');

        const rect = cardContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -20;
        const rotateY = ((x - centerX) / centerX) * 20;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    cardContainer.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        card.style.transition = `transform 0.5s ease`;
        
        setTimeout(() => {
            card.style.transition = `transform 0.1s ease-out`;
            card.classList.add('floating');
        }, 500);
    });
}

// 4. Form Submit Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Pesan berhasil dikirim! Terima kasih.');
        contactForm.reset();
    });
}