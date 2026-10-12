const carousel = document.getElementById('glance-carousel');

if (carousel) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function movePhotos(direction) {
    const lastPosition = carousel.scrollWidth - carousel.clientWidth;
    let position = carousel.scrollLeft + direction * carousel.clientWidth;
    if (direction > 0 && carousel.scrollLeft >= lastPosition - 2) position = 0;
    if (direction < 0 && carousel.scrollLeft <= 2) position = lastPosition;
    carousel.scrollTo({ left: position, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }

  document.querySelectorAll('[data-carousel-direction]').forEach((button) => {
    button.addEventListener('click', () => movePhotos(Number(button.dataset.carouselDirection)));
  });

  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      movePhotos(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
}
