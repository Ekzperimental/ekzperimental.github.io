const WORD_LIMIT = 80;

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function initTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial");
  if (!testimonials.length) return;

  const modal = document.querySelector("[data-testimonial-modal]");
  const closeButton = document.querySelector("[data-testimonial-close]");
  const modalName = document.querySelector("[data-testimonial-modal-name]");
  const modalMeta = document.querySelector("[data-testimonial-modal-meta]");
  const modalQuote = document.querySelector("[data-testimonial-modal-quote]");
  const modalPortrait = document.querySelector("[data-testimonial-modal-portrait]");
  if (!modal || !closeButton || !modalName || !modalMeta || !modalQuote || !modalPortrait) return;

  const closeModal = () => {
    document.body.classList.remove("modal-open");
    if (modal.open) modal.close();
  };

  testimonials.forEach((testimonial) => {
    const quote = testimonial.querySelector("blockquote");
    if (!quote || countWords(quote.textContent) <= WORD_LIMIT) return;

    const portrait = testimonial.querySelector(".testimonial__portrait");
    const name = testimonial.querySelector("figcaption strong")?.textContent.trim() || "Testimonial";
    const meta = testimonial.querySelector("figcaption span")?.textContent.trim() || "";
    const button = document.createElement("button");
    button.className = "testimonial__toggle";
    button.type = "button";
    button.setAttribute("aria-haspopup", "dialog");
    button.textContent = "Read more →";

    testimonial.classList.add("is-collapsible");
    quote.after(button);

    button.addEventListener("click", () => {
      modalName.textContent = name;
      modalMeta.textContent = meta;
      modalQuote.innerHTML = quote.innerHTML;
      modalPortrait.src = portrait?.currentSrc || portrait?.src || "";
      modalPortrait.alt = portrait?.alt || "";
      document.body.classList.add("modal-open");
      modal.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  modal.addEventListener("cancel", () => {
    document.body.classList.remove("modal-open");
  });
}
