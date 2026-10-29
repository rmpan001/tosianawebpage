document.querySelectorAll('.navbar__dropdown').forEach((dropdown) => {
  const button = dropdown.querySelector('button');
  const setOpen = (open) => button.setAttribute('aria-expanded', String(open));
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  dropdown.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') setOpen(true);
  });
  dropdown.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse' && !dropdown.contains(document.activeElement)) setOpen(false);
  });
  dropdown.addEventListener('focusout', (event) => {
    if (!dropdown.contains(event.relatedTarget)) setOpen(false);
  });
  dropdown.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      button.focus();
      setOpen(false);
    }
    if (event.key === 'ArrowDown' && event.target === button) {
      event.preventDefault();
      setOpen(true);
      dropdown.querySelector('a').focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) setOpen(false);
  });
});
