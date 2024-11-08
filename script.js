



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

// Selecionar o contêiner e os botões
const menuItemsContainer = document.querySelector('.menu-items');
const prevButton = document.querySelector('.prev-menu');
const nextButton = document.querySelector('.next-menu');

// Clonar os itens para criar o efeito infinito
const menuItems = [...menuItemsContainer.children];
menuItems.forEach((item) => {
    const clone = item.cloneNode(true);
    menuItemsContainer.appendChild(clone); // Adiciona clones ao final
});
menuItems.forEach((item) => {
    const clone = item.cloneNode(true);
    menuItemsContainer.insertBefore(clone, menuItemsContainer.firstChild); // Adiciona clones ao início
});

// Configurações
const itemWidth = 150 + 15; // Largura de cada item + gap
const totalItems = menuItems.length * 3; // Total de itens (originais + clones)
let currentScrollPosition = itemWidth * menuItems.length; // Começa no meio dos itens clonados

// Inicializa o carrossel no meio
menuItemsContainer.style.transform = `translateX(-${currentScrollPosition}px)`;

// Função para mover o carrossel
function scrollCarousel(direction) {
    // Atualizar a posição atual
    currentScrollPosition += direction * itemWidth;

    // Move o contêiner
    menuItemsContainer.style.transition = "transform 0.5s ease-in-out"; // Animação suave
    menuItemsContainer.style.transform = `translateX(-${currentScrollPosition}px)`;

    // Redefinir posição no final da transição para manter o efeito contínuo
    setTimeout(() => {
        if (direction === 1 && currentScrollPosition >= itemWidth * (totalItems - menuItems.length)) {
            // Se rolou para a direita e atingiu o fim
            currentScrollPosition = itemWidth * menuItems.length;
            menuItemsContainer.style.transition = "none"; // Remove animação temporariamente
            menuItemsContainer.style.transform = `translateX(-${currentScrollPosition}px)`;
        } else if (direction === -1 && currentScrollPosition <= 0) {
            // Se rolou para a esquerda e atingiu o início
            currentScrollPosition = itemWidth * (totalItems - menuItems.length * 2);
            menuItemsContainer.style.transition = "none"; // Remove animação temporariamente
            menuItemsContainer.style.transform = `translateX(-${currentScrollPosition}px)`;
        }
    }, 500); // Ajusta após a transição (500ms)
}

// Eventos dos botões
prevButton.addEventListener('click', () => scrollCarousel(-1)); // Rola para a esquerda
nextButton.addEventListener('click', () => scrollCarousel(1)); // Rola para a direita
