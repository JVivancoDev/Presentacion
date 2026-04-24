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

// Al cargar
updateSlide();