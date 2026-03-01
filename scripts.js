const text = "AI & Machine Learning Enthusiast | Python & C++ Developer";
const typingDelay = 100;
const typewriterElement = document.getElementById("typewriter");

let charIndex = 0;

function type() {
    if (charIndex < text.length) {
        typewriterElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
}

// Mulai animasi pas halaman beres di-load
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000); // Jeda 1 detik sebelum ngetik
});
