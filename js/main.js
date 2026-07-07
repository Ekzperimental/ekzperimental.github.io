import { initNavbar } from "./navbar.js?v=20260707-26";
import { initHero } from "./hero.js?v=20260707-26";
import { initRevealAnimations } from "./animations.js?v=20260707-26";
import { initWork } from "./work.js?v=20260707-26";
import { initContactLinks } from "./contact.js?v=20260707-26";

const boot = () => {
  initNavbar();
  initHero();
  initWork();
  initContactLinks();
  initRevealAnimations();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
