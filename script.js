// HandWriter — small progressive-enhancement script
// No frameworks, no tracking. Just a subtle one-time entrance for the hero.

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.opacity = '0';
      hero.style.transform = 'translateY(10px)';
      hero.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          hero.style.opacity = '1';
          hero.style.transform = 'translateY(0)';
        });
      });
    }
  }
});
