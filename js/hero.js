export function initHero() {
  const backdrop = document.querySelector(".site-backdrop");
  if (!backdrop || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;

  const updateBackdrop = () => {
    const shift = Math.max(window.scrollY * -0.055, -140);
    backdrop.style.setProperty("--backdrop-shift", `${shift}px`);
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateBackdrop);
  };

  updateBackdrop();
  window.addEventListener("scroll", requestUpdate, { passive: true });
}
