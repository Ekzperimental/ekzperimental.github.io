// Pass one or two { id: "Vimeo ID", title: "Video title" } entries when ready.
// An empty list deliberately renders one neutral placeholder without an iframe.
export function renderServiceVideoExamples(container, examples = []) {
  container.replaceChildren();
  if (!examples.length) {
    const placeholder = document.createElement("div");
    placeholder.className = "service-video-example";
    const label = document.createElement("span");
    label.dataset.i18n = "services.editing.placeholder";
    label.textContent = document.documentElement.lang === "bg" ? "Видеопример — предстои" : "Video example — coming soon";
    placeholder.appendChild(label);
    container.appendChild(placeholder);
    return;
  }

  examples.slice(0, 2).forEach(({ id, title }) => {
    if (!/^\d+$/.test(String(id))) return;
    const example = document.createElement("button");
    example.className = "service-video-example";
    example.type = "button";
    example.dataset.videoOpen = "";
    example.dataset.videoId = String(id);
    example.dataset.videoTitle = title || "Vimeo video";
    example.setAttribute("aria-label", example.dataset.videoTitle);
    example.setAttribute("aria-haspopup", "dialog");
    example.setAttribute("aria-controls", "video-modal");
    const image = document.createElement("img");
    const thumbnailVersion = ["883673716", "315892606", "395201116", "849446296"].includes(String(id)) ? "?v=20261123-19" : "";
    image.src = `assets/thumbnails/vimeo-${id}.webp${thumbnailVersion}`;
    image.alt = "";
    image.width = 1280;
    image.height = 720;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => { image.src = "assets/images/og-image.jpg"; }, { once: true });
    const play = document.createElement("span");
    play.className = "service-video-example__play";
    play.setAttribute("aria-hidden", "true");
    const caption = document.createElement("span");
    caption.className = "service-video-example__caption";
    caption.textContent = example.dataset.videoTitle;
    example.append(image, play, caption);
    container.appendChild(example);
  });
}

function initServiceModal(trigger, modal, videoExamples) {
  const closeButton = modal?.querySelector("[data-editing-close]");
  const examples = modal?.querySelector("[data-service-video-examples]");
  if (!trigger || !modal || !closeButton || !examples) return;
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
    // Release example thumbnails when the service modal closes.
    examples.replaceChildren();
    modal.classList.remove("is-open");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) finishClose();
    else closeTimer = window.setTimeout(finishClose, 180);
  };

  trigger.addEventListener("click", () => {
    if (modal.open) return;
    previousFocus = document.activeElement;
    scrollPosition = { x: window.scrollX, y: window.scrollY };
    previousBodyStyle = document.body.getAttribute("style");
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const paddingRight = parseFloat(getComputedStyle(document.body).paddingRight) || 0;
    Object.assign(document.body.style, {
      position: "fixed", top: `-${scrollPosition.y}px`, left: `-${scrollPosition.x}px`,
      width: "100%", overflow: "hidden", paddingRight: `${paddingRight + scrollbarWidth}px`,
    });
    renderServiceVideoExamples(examples, videoExamples);
    modal.showModal();
    closeButton.focus({ preventScroll: true });
    requestAnimationFrame(() => {
      if (!closing && modal.open) modal.classList.add("is-open");
    });
  });

  modal.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const focusable = [...modal.querySelectorAll('button, a[href], iframe, [tabindex="0"]')]
      .filter((element) => element.getClientRects().length);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
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


initServiceModal(
  document.querySelector("[data-editing-open]"),
  document.querySelector("[data-editing-modal]"),
  [
    { id: "265194902", title: "BEHIND THE SCENES OF DER HOLLAND JOB" },
    { id: "1135031842", title: "TWRAPS | Rivian R1T | Flowing Black Charming Red" },
  ],
);

initServiceModal(
  document.querySelector("[data-documentary-open]"),
  document.querySelector("[data-documentary-modal]"),
  [
    { id: "1132543450", title: "STARTERAs | 2025 BREAKIN' B.A.P. | С ГЛАВАТА НАДОЛУ | КУЛТУРА | ЕП01" },
    { id: "499214176", title: "EF ONE | С ГЛАВАТА НАДОЛУ | С01 ЕП08 | НАЧАЛОТО" },
  ],
);


initServiceModal(
  document.querySelector("[data-commercial-open]"),
  document.querySelector("[data-commercial-modal]"),
  [
    { id: "395201116", title: "SCULA — Ski School" },
    { id: "314453415", title: "Ресторант “Вкъщи” с Мария Силвестър" },
  ],
);


initServiceModal(
  document.querySelector("[data-music-open]"),
  document.querySelector("[data-music-modal]"),
  [
    { id: "883673716", title: "Q-TEK CREW - Q-TEK" },
    { id: "849446296", title: "FUN" },
  ],
);


initServiceModal(
  document.querySelector("[data-street-art-open]"),
  document.querySelector("[data-street-art-modal]"),
  [
    { id: "1127823800", title: "Cycle Of Knowledge Ep01 feat. Sve Yankov" },
    { id: "1127825255", title: "Cycle Of Knowledge Ep01 - Interview feat. Sve Yankov" },
  ],
);


initServiceModal(
  document.querySelector("[data-festival-open]"),
  document.querySelector("[data-festival-modal]"),
  [
    { id: "1191806873", title: "СМОЛЯН НА МЛАДИТЕ 2026 RECAP" },
    { id: "315892606", title: "Additive Days 2018" },
  ],
);


initServiceModal(
  document.querySelector("[data-dance-open]"),
  document.querySelector("[data-dance-modal]"),
  [
    { id: "1167648472", title: "ПРОСТО ДЖЕМ VOL. 2" },
    { id: "1160736860", title: "2TOUCH" },
  ],
);
