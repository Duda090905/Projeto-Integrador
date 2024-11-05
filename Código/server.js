let currentIndex = 0;
const carousels = document.querySelectorAll('.carousel'); // Seleciona todos os carrosséis

carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    carousel.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateCarousel(carousel, currentIndex);
    });

    carousel.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        updateCarousel(carousel, currentIndex);
    });
});

function updateCarousel(carousel, currentIndex) {
    const images = carousel.querySelectorAll('.carousel-images img');
    const offset = -currentIndex * 100;
    carousel.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
