export function initContactLinks() {
  const links = Array.from(document.querySelectorAll("[data-email-link]"));

  links.forEach((link) => {
    const email = atob(link.dataset.mail);
    link.href = `mailto:${email}?subject=Project%20Inquiry`;
  });
}
