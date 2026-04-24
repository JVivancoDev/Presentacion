lucide.createIcons();

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const progress = document.getElementById('progress');
const slideNum = document.getElementById('slide-number');

function updateSlide() {
    slides.forEach((s, i) => {
        s.classList.toggle('active', i === currentSlide);
    });
    progress.style.width = ((currentSlide + 1) / slides.length) * 100 + '%';
    slideNum.textContent = `Slide ${String(currentSlide + 1).padStart(2, '0')}/${slides.length}`;
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// =========================================
// SOPORTE PARA GESTOS TÁCTILES (SWIPE)
// =========================================
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50; // Distancia mínima para considerar un swipe
    if (touchEndX < touchStartX - swipeThreshold) {
        nextSlide(); // Deslizar izquierda -> Siguiente
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        prevSlide(); // Deslizar derecha -> Anterior
    }
}

// Al cargar
updateSlide();