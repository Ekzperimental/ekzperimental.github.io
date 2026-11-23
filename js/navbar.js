const SCROLLED_CLASS = "is-scrolled";
const OPEN_CLASS = "is-open";

export function initNavbar() {
  const header = document.querySelector("[data-navbar]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");

  if (!header || !toggle || !menu) return;

  const pageContent = [document.querySelector("main"), document.querySelector("footer")].filter(Boolean);
  const syncMenuAccessibility = () => {
    const mobile = !window.matchMedia("(min-width: 48rem)").matches;
    const open = toggle.getAttribute("aria-expanded") === "true";
    const hidden = mobile && !open;
    if (hidden && menu.contains(document.activeElement)) toggle.focus({ preventScroll: true });
    menu.inert = hidden;
    pageContent.forEach((element) => { element.inert = mobile && open; });
  };

  const setScrolled = () => {
    header.classList.toggle(SCROLLED_CLASS, window.scrollY > 12);
  };

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", toggle.dataset.labelOpen || "Open menu");
    header.classList.remove(OPEN_CLASS);
    menu.classList.remove(OPEN_CLASS);
    document.body.classList.remove("menu-open");
    syncMenuAccessibility();
  };

  const toggleMenu = () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? (toggle.dataset.labelOpen || "Open menu") : (toggle.dataset.labelClose || "Close menu"));
    header.classList.toggle(OPEN_CLASS, !isOpen);
    menu.classList.toggle(OPEN_CLASS, !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
    syncMenuAccessibility();
  };

  toggle.addEventListener("click", toggleMenu);
  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });

  window.addEventListener("scroll", setScrolled, { passive: true });
  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 48rem)").matches) closeMenu();
    else syncMenuAccessibility();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const wasOpen = toggle.getAttribute("aria-expanded") === "true";
      closeMenu();
      if (wasOpen) toggle.focus({ preventScroll: true });
      return;
    }

    if (event.key !== "Tab" || toggle.getAttribute("aria-expanded") !== "true"
      || window.matchMedia("(min-width: 48rem)").matches) return;

    const focusable = [...header.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')]
      .filter((element) => element.getClientRects().length);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!header.contains(document.activeElement)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  setScrolled();
  syncMenuAccessibility();
}
