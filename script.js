
    const contactLink = document.getElementById("contactLink");
    const emailLink = document.getElementById("emailLink");
    const startProjectLink = document.getElementById("startProjectLink");
    const email = atob(contactLink.dataset.mail);
    contactLink.href = `mailto:${email}`;
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
    startProjectLink.href = `mailto:${email}?subject=Project%20Inquiry`;

    const statNumbers = document.querySelectorAll(".stat-number[data-count]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function animateStatNumber(el) {
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const duration = 1100;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${Math.round(target * eased)}${suffix}`;

        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }

    function startStatCounters() {
      statNumbers.forEach((el) => {
        if (el.dataset.animated) return;
        el.dataset.animated = "true";

        if (prefersReducedMotion) {
          el.textContent = `${el.dataset.count}${el.dataset.suffix || ""}`;
        } else {
          animateStatNumber(el);
        }
      });
    }

    if ("IntersectionObserver" in window) {
      const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          startStatCounters();
          observer.disconnect();
        });
      }, { threshold: 0.35 });

      const statsElement = document.querySelector(".stats");
      if (statsElement) statsObserver.observe(statsElement);
    } else {
      startStatCounters();
    }

    const categories = [
      {
        gridId: "grid-street-art",
        category: "Street Art",
        videos: [
          { id: 1195697921, project: "Орфей и вечността - Mural painting by Jermain", role: "Director • Videographer • Video Editor", year: "2026" },
          { id: 1192226885, project: "RODOPA GLOW XPOME", role: "Video Editor", year: "2026" },
          { id: 1127819993, project: "Упование - Mural painting by Jermain", role: "Director • Videographer • Video Editor", year: "2026" }
        ]
      },
      {
        gridId: "grid-documentary",
        category: "Documentary",
        videos: [
          { id: 853021554, project: "РУСИ - С Главата Надолу С02 Е20", role: "Director • Videographer • Video Editor", year: "2023" },
          { id: 1152485222, project: "DJ NOT EASY - Запис на плочи", role: "Director • Videographer • Video Editor", year: "2025" },
          { id: 1132543450, project: "STARTERAs - BREAKIN' B.A.P.", role: "Director • Videographer • Video Editor", year: "2025" }
        ]
      },
      {
        gridId: "grid-dance-theatre",
        category: "Dance & Theatre",
        videos: [
          { id: 1202080876, project: "Създадени от кал - танцово-театрален спектакъл", role: "Videographer • Video Editor", year: "2026" },
          { id: 1178117259, project: "ПРОСТО ДЖЕМ 3", role: "Director • Videographer • Video Editor", year: "2026" },
          { id: 342951818, project: "FLAVA HOUSE - Това Не Е Спектакъл", role: "Director • Video Editor", year: "2019" }
        ]
      },
      {
        gridId: "grid-music-festivals",
        category: "Music & Festivals",
        videos: [
          { id: 1191806871, project: "Фестивал - СМОЛЯН НА МЛАДИТЕ - Ден 1", role: "Director • Videographer • Video Editor", year: "2026" },
          { id: 1197611630, project: "Q-TEK - СЕРИОЗНИ ИГРАЧИ", role: "Director • Videographer • Video Editor", year: "2026" },
          { id: 1191806873, project: "Фестивал - СМОЛЯН НА МЛАДИТЕ - Recap", role: "Director • Videographer • Video Editor", year: "2026" }
        ]
      },
      {
        gridId: "grid-experimental",
        category: "Experimental",
        videos: [
          { id: 317971978, project: "Вплитане", role: "Director • Video Editor", year: "2019" },
          { id: 849446296, project: "Fun", role: "Director • Videographer • Video Editor", year: "2023" },
          { id: 233682218, project: "FLAVA HOUSE - Продължавай", role: "Director • Video Editor", year: "2017" }
        ]
      }
    ];

    function buildVideoTile(video, category, index) {
      const { id, project, role, year } = video;
      const tile = document.createElement("div");
      tile.className = "video-tile";
      tile.style.animationDelay = `${0.85 + index * 0.06}s`;

      const wrapper = document.createElement("div");
      wrapper.className = "video-wrapper";

      const thumb = document.createElement("div");
      thumb.className = "thumb";

      const playBtn = document.createElement("button");
      playBtn.className = "play-btn";
      playBtn.type = "button";
      playBtn.setAttribute("aria-label", "Play video");
      playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M5 3l16 9-16 9V3z"/></svg>';

      wrapper.appendChild(thumb);
      wrapper.appendChild(playBtn);

      const meta = document.createElement("div");
      meta.className = "video-meta";
      meta.innerHTML = `
        <p><span class="meta-label">Project</span><span class="meta-value">${project}</span></p>
        <p><span class="meta-label">Category</span><span class="meta-value">${category}</span></p>
        <p><span class="meta-label">Role</span><span class="meta-value">${role}</span></p>
        <p><span class="meta-label">Year</span><span class="meta-value">${year}</span></p>
      `;

      tile.appendChild(wrapper);
      tile.appendChild(meta);

      fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}&width=640`)
        .then((res) => res.json())
        .then((data) => {
          if (data.thumbnail_url) thumb.style.backgroundImage = `url(${data.thumbnail_url})`;
        })
        .catch(() => {});

      wrapper.addEventListener("click", () => {
        wrapper.innerHTML = `<iframe src="https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0&dnt=1" title="${project}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
      });

      return tile;
    }

    categories.forEach((category) => {
      const grid = document.getElementById(category.gridId);
      category.videos.forEach((video, i) => {
        grid.appendChild(buildVideoTile(video, category.category, i));
      });
    });

    (function () {
      const SHOWREEL_ID = "1205541908";
      const frame = document.getElementById("showreelFrame");
      const thumb = document.getElementById("showreelThumb");

      fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${SHOWREEL_ID}&width=1280`)
        .then((res) => res.json())
        .then((data) => {
          if (data.thumbnail_url) thumb.style.backgroundImage = `url(${data.thumbnail_url})`;
        })
        .catch(() => {});

      frame.addEventListener("click", () => {
        frame.innerHTML = `<iframe src="https://player.vimeo.com/video/${SHOWREEL_ID}?autoplay=1&title=0&byline=0&portrait=0&dnt=1" title="Ekzperimental Showreel" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
      });
    })();
  