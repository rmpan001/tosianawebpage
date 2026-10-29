const gallery = document.querySelector('.grad-gallery');

if (gallery) {
  const items = [...gallery.children];
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const item = entry.target;
        const image = item.querySelector('img');
        const show = () => item.classList.add('is-visible');
        if (image.complete) show();
        else {
          image.addEventListener('load', show, { once: true });
          image.addEventListener('error', show, { once: true });
        }
        reveal.unobserve(item);
      });
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
    // Start reveals after the initial grid layout is ready.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      gallery.classList.add('grad-gallery--reveal');
      items.forEach((item) => reveal.observe(item));
    }));
  }
}
