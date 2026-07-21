const SCROLLED_CLASS = "is-scrolled";
const OPEN_CLASS = "is-open";

export function initNavbar() {
  const header = document.querySelector("[data-navbar]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");

  if (!header || !toggle || !menu) return;

  const setScrolled = () => {
    header.classList.toggle(SCROLLED_CLASS, window.scrollY > 12);
  };

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", toggle.dataset.labelOpen || "Open menu");
    header.classList.remove(OPEN_CLASS);
    menu.classList.remove(OPEN_CLASS);
    document.body.classList.remove("menu-open");
  };

  const toggleMenu = () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? (toggle.dataset.labelOpen || "Open menu") : (toggle.dataset.labelClose || "Close menu"));
    header.classList.toggle(OPEN_CLASS, !isOpen);
    menu.classList.toggle(OPEN_CLASS, !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  };

  toggle.addEventListener("click", toggleMenu);
  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });

  window.addEventListener("scroll", setScrolled, { passive: true });
  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 48rem)").matches) closeMenu();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  setScrolled();
}
