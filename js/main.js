import { initNavbar } from "./navbar.js?v=20260707-26";
import { initHero } from "./hero.js?v=20260707-26";
import { initRevealAnimations } from "./animations.js?v=20260707-26";
import { initWork } from "./work.js?v=20260717-01";
import { initContactLinks } from "./contact.js?v=20260707-26";
import { initTestimonials } from "./testimonials.js?v=20260716-03";

const boot = () => {
  initNavbar();
  initHero();
  initWork();
  initContactLinks();
  initTestimonials();
  initRevealAnimations();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
