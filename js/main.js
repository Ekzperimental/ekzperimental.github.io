import { initNavbar } from "./navbar.js?v=20261123-21";
import { initHero } from "./hero.js?v=20261123-22";
import { initRevealAnimations } from "./animations.js?v=20260707-26";
import { initWork } from "./work.js?v=20261123-21";
import { initContactLinks } from "./contact.js?v=20260707-26";
import { initTestimonials } from "./testimonials.js?v=20260720-01";
import { initI18n } from "./i18n.js?v=20261123-22";
import { initPrivacy } from "./privacy.js?v=20261123-20";

const boot = () => {
  initNavbar();
  initHero();
  initWork();
  initContactLinks();
  initTestimonials();
  initI18n();
  initPrivacy();
  initRevealAnimations();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
