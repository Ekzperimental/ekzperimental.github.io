export function initPrivacy() {
  const trigger = document.querySelector("[data-privacy-open]");
  const modal = document.querySelector("[data-privacy-modal]");
  const closeButton = modal?.querySelector("[data-privacy-close]");
  const title = modal?.querySelector("#privacy-policy-title");
  if (!trigger || !modal || !closeButton || !title) return;

  let previousFocus;
  let scrollPosition;
  let previousBodyStyle;
  let closeTimer;
  let closing = false;

  const finishClose = () => {
    clearTimeout(closeTimer);
    modal.close();
    if (previousBodyStyle === null) document.body.removeAttribute("style");
    else document.body.setAttribute("style", previousBodyStyle);
    window.scrollTo({ left: scrollPosition.x, top: scrollPosition.y, behavior: "instant" });
    previousFocus?.focus({ preventScroll: true });
    closing = false;
  };

  const close = () => {
    if (!modal.open || closing) return;
    closing = true;
    modal.classList.remove("is-open");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) finishClose();
    else closeTimer = window.setTimeout(finishClose, 180);
  };

  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    if (modal.open || closing) return;
    previousFocus = document.activeElement;
    scrollPosition = { x: window.scrollX, y: window.scrollY };
    previousBodyStyle = document.body.getAttribute("style");
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const paddingRight = parseFloat(getComputedStyle(document.body).paddingRight) || 0;
    Object.assign(document.body.style, {
      position: "fixed", top: `-${scrollPosition.y}px`, left: `-${scrollPosition.x}px`,
      width: "100%", overflow: "hidden", paddingRight: `${paddingRight + scrollbarWidth}px`,
    });
    modal.showModal();
    modal.scrollTop = 0;
    title.focus({ preventScroll: true });
    requestAnimationFrame(() => {
      if (!closing && modal.open) modal.classList.add("is-open");
    });
  });

  modal.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const focusable = [...modal.querySelectorAll('button, a[href], [tabindex="0"]')]
      .filter((element) => element.getClientRects().length);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === title)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  closeButton.addEventListener("click", close);
  modal.addEventListener("cancel", (event) => {
    event.preventDefault();
    close();
  });
  modal.addEventListener("click", (event) => {
    const bounds = modal.getBoundingClientRect();
    if (event.target === modal && (event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom)) close();
  });
}
