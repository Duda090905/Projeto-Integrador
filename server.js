let currentIndex = 0;

const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updateCarousel();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

function updateCarousel() {
    const imageWidth = images[0].clientWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}
