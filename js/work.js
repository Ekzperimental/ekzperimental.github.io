const previewByCategory = {
  "Street Art": "assets/images/work-commercial.jpg",
  Documentary: "assets/images/work-documentary.jpg",
  "Dance & Theatre": "assets/images/work-dance-theatre.jpg",
  "Music & Festivals": "assets/images/work-festivals.jpg",
};

const projects = [
  { id: "1195697921", category: "Street Art", title: "Орфей и вечността - Mural painting by Jermain", displayTitle: "Орфей и вечността", role: "Director / Videographer / Video Editor", year: "2026" },
  { id: "1209839499", category: "Street Art", title: "True Rokin Soul 20th Anniversary", role: "Videographer / Video Editor", year: "2026", thumbnail: "https://vumbnail.com/1209839499.jpg" },
  { id: "1192226885", category: "Street Art", title: "RODOPA GLOW XPOME", role: "Video Editor", year: "2026" },
  { id: "1127819993", category: "Street Art", title: "Упование - Mural painting by Jermain", displayTitle: "Упование", role: "Director / Videographer / Video Editor", year: "2026" },
  { id: "1191806871", category: "Music & Festivals", title: "Фестивал - СМОЛЯН НА МЛАДИТЕ - Ден 1", displayTitle: "Смолян на младите", role: "Director / Videographer / Video Editor", year: "2026" },
  { id: "1202080876", category: "Dance & Theatre", title: "Създадени от кал - танцово-театрален спектакъл", displayTitle: "Създадени от кал", role: "Videographer / Video Editor", year: "2026" },
  { id: "342951818", category: "Dance & Theatre", title: "FLAVA HOUSE - Това Не Е Спектакъл", displayTitle: "Flava House", role: "Director / Video Editor", year: "2019" },
  { id: "1191806873", category: "Music & Festivals", title: "Фестивал - СМОЛЯН НА МЛАДИТЕ - Recap", displayTitle: "Festival Recap", role: "Director / Videographer / Video Editor", year: "2026" },
  { id: "1178117259", category: "Dance & Theatre", title: "ПРОСТО ДЖЕМ 3", displayTitle: "Просто Джем", role: "Director / Videographer / Video Editor", year: "2026" },
  { id: "317971978", category: "Dance & Theatre", title: "Вплитане", role: "Director / Video Editor", year: "2019" },
  { id: "853021554", category: "Documentary", title: "РУСИ - С Главата Надолу С02 Е20", displayTitle: "Руси", role: "Director / Videographer / Video Editor", year: "2023" },
  { id: "1152485222", category: "Documentary", title: "DJ NOT EASY - Запис на плочи", displayTitle: "DJ Not Eazy", role: "Director / Videographer / Video Editor", year: "2025" },
  { id: "1132543450", category: "Documentary", title: "STARTERAs - BREAKIN' B.A.P.", displayTitle: "STARTERAs", role: "Director / Videographer / Video Editor", year: "2025" },
  { id: "1197611630", category: "Music & Festivals", title: "Q-TEK - СЕРИОЗНИ ИГРАЧИ", displayTitle: "Q-TEK", role: "Director / Videographer / Video Editor", year: "2026" },
  { id: "849446296", category: "Dance & Theatre", title: "Fun", displayTitle: "FUN", role: "Director / Videographer / Video Editor", year: "2023" },
  { id: "233682218", category: "Dance & Theatre", title: "FLAVA HOUSE - Продължавай", displayTitle: "Продължавай", role: "Director / Video Editor", year: "2017" },
];

const desktopMasonryOrder = [0, 3, 4, 6, 9, 10, 12, 15, 1, 2, 5, 7, 8, 11, 13, 14];

function getProjectSequence() {
  if (window.matchMedia("(min-width: 48rem)").matches) {
    return desktopMasonryOrder.map((index) => projects[index]);
  }

  return projects;
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "work-card reveal";
  article.dataset.reveal = "";

  const fallbackImage = previewByCategory[project.category];
  const thumbnail = project.thumbnail || `https://vumbnail.com/${project.id}.jpg`;
  const displayTitle = project.displayTitle || project.title;
  article.innerHTML = `
    <button class="work-card__button" type="button" data-video-open data-video-id="${project.id}" data-video-title="${project.title}">
      <span class="work-card__media">
        <img src="${thumbnail}" alt="${project.title} video preview" width="1280" height="720" loading="lazy" decoding="async" data-fallback-src="${fallbackImage}">
      </span>
      <span class="work-card__content">
        <span class="work-card__category" data-i18n-work-category="${project.category}" data-work-year="${project.year}">${project.category} / ${project.year}</span>
        <span class="work-card__title">${displayTitle}</span>
        <span class="work-card__full-title">${project.title}</span>
        <span class="work-card__role" data-i18n-work-role="${project.role}">${project.role}</span>
      </span>
    </button>
  `;

  return article;
}

function openVideoModal(modal, frame, titleElement, project) {
  titleElement.textContent = project.title;
  frame.innerHTML = `
    <iframe
      src="https://player.vimeo.com/video/${project.id}?autoplay=1&title=0&byline=0&portrait=0&dnt=1"
      title="${project.title}"
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
  document.body.classList.add("modal-open");
  modal.showModal();
}

export function initWork() {
  const grid = document.querySelector("[data-work-grid]");
  const modal = document.querySelector("[data-video-modal]");
  const frame = document.querySelector("[data-video-frame]");
  const closeButton = document.querySelector("[data-video-close]");
  const titleElement = document.querySelector("[data-video-modal-title]");

  if (!grid || !modal || !frame || !closeButton || !titleElement) return;

  getProjectSequence().forEach((project) => {
    grid.appendChild(createProjectCard(project));
  });

  document.querySelectorAll("[data-fallback-src]").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = image.dataset.fallbackSrc;
    }, { once: true });
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-video-open]");
    if (!button) return;

    const project = {
      id: button.dataset.videoId,
      title: button.dataset.videoTitle,
    };

    openVideoModal(modal, frame, titleElement, project);
    closeButton.focus();
  });

  const closeModal = () => {
    frame.innerHTML = "";
    document.body.classList.remove("modal-open");
    if (modal.open) modal.close();
  };

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  modal.addEventListener("cancel", () => {
    frame.innerHTML = "";
    document.body.classList.remove("modal-open");
  });
}
