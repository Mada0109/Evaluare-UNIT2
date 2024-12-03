let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide() {
    slides[currentIndex].style.display = 'none'; 
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = 'block'; 
}

setInterval(showSlide, 3000);