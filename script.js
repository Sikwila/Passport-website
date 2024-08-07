
// menu dropdown



function animateNumbers() {
  const numbers = document.querySelectorAll('.numbers');

const duration = 2000; // animation duration in milliseconds

numbers.forEach((number) => {
  let currentValue = 0;
  let targetValue = parseFloat(number.textContent.replace('+', ''));

  const animate = () => {
    currentValue += (targetValue - currentValue) / 10;
    number.textContent = `${currentValue.toFixed(1)}+`;
    if (currentValue < targetValue) {
      requestAnimationFrame(animate);
    }
  };

  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 100); // start animating after 100ms
});
}

document.addEventListener('DOMContentLoaded', animateNumbers);




// Carousel

const carouselContainer = document.querySelector('.carousel-container');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let activeItem = 0;

function prevItem() {
  activeItem--;
  if (activeItem < 0) {
    activeItem = carouselItems.length - 1;
  }
  updateCarousel();
}

function nextItem() {
  activeItem++;
  if (activeItem >= carouselItems.length) {
    activeItem = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  carouselItems.forEach((item) => {
    item.style.display = 'none';
  });

  carouselItems[activeItem].style.display = 'block';

  prevBtn.disabled = activeItem === 0;
  nextBtn.disabled = activeItem === carouselItems.length - 1;
}

prevBtn.addEventListener('click', prevItem);
nextBtn.addEventListener('click', nextItem);

updateCarousel();

