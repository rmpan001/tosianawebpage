const carousel = document.getElementById('glance-carousel');

if (carousel) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const section = carousel.closest('section');
  let paused = reducedMotion.matches;
  let hovering = false;
  let keyboardFocus = false;
  let timer;

  function updateAutoplay() {
    clearInterval(timer);
    if (!paused && !hovering && !keyboardFocus && !document.hidden) {
      timer = setInterval(() => movePhotos(1), 5000);
    }
  }

  carousel.querySelectorAll('.portfolio__item').forEach((photo) => {
    photo.addEventListener('mouseenter', () => { hovering = true; updateAutoplay(); });
    photo.addEventListener('mouseleave', () => { hovering = false; updateAutoplay(); });
  });
  section.addEventListener('pointerdown', () => { keyboardFocus = false; updateAutoplay(); });
  section.addEventListener('keydown', () => { keyboardFocus = true; updateAutoplay(); });
  section.addEventListener('focusin', (event) => {
    keyboardFocus = event.target.matches(':focus-visible');
    updateAutoplay();
  });
  section.addEventListener('focusout', () => setTimeout(() => {
    keyboardFocus = section.contains(document.activeElement) && document.activeElement.matches(':focus-visible');
    updateAutoplay();
  }, 0));
  document.addEventListener('visibilitychange', updateAutoplay);
  reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; updateAutoplay(); });
  updateAutoplay();
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
