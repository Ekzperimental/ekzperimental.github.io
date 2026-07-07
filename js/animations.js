export function initRevealAnimations() {
  const reveals = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!reveals.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gsap = window.gsap;
  const scrollTrigger = window.ScrollTrigger;

  if (prefersReducedMotion) {
    reveals.forEach((element) => element.classList.add("is-visible"));
    initProcessFallback();
    initServicesFallback();
    return;
  }

  if (gsap && scrollTrigger) {
    gsap.registerPlugin(scrollTrigger);
    initGsapMotion(gsap);
    return;
  }

  if (!("IntersectionObserver" in window)) {
    reveals.forEach((element) => element.classList.add("is-visible"));
    initProcessFallback();
    initServicesFallback();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
  );

  reveals.forEach((element) => observer.observe(element));
  initProcessFallback();
  initServicesFallback();
}

function initGsapMotion(gsap) {
  const heroItems = gsap.utils.toArray(
    ".hero__logo, .hero .eyebrow, .hero__title, .hero__subtitle, .hero__actions",
  );
  const scrollReveals = gsap.utils
    .toArray("[data-reveal]")
    .filter((element) => (
      !element.closest(".hero")
      && !element.classList.contains("work-card")
      && !element.matches("[data-service-step]")
      && !element.closest(".contact__panel")
      && !element.closest(".showreel")
    ));
  const workCards = gsap.utils.toArray(".work-card");
  const parallaxImages = gsap.utils.toArray(".about__photos img");

  gsap.set(heroItems, { autoAlpha: 0, y: 18 });
  gsap.timeline({ defaults: { duration: 0.9, ease: "power3.out" } })
    .to(heroItems, {
      autoAlpha: 1,
      y: 0,
      stagger: 0.08,
      onStart: () => heroItems.forEach((item) => item.classList.add("is-visible")),
    });

  scrollReveals.forEach((element) => {
    gsap.fromTo(
      element,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.95,
        ease: "power3.out",
        clearProps: "transform,visibility,opacity",
        scrollTrigger: {
          trigger: element,
          start: "top 84%",
          once: true,
        },
        onStart: () => element.classList.add("is-visible"),
      },
    );
  });

  if (workCards.length) {
    gsap.fromTo(
      workCards,
      { autoAlpha: 0, y: 22 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".work-grid",
          start: "top 82%",
          once: true,
        },
        onStart: () => workCards.forEach((card) => card.classList.add("is-visible")),
      },
    );
  }

  parallaxImages.forEach((image) => {
    gsap.to(image, {
      yPercent: -4,
      ease: "none",
      scrollTrigger: {
        trigger: image.closest("section") || image,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  });

  initShowreelReveal(gsap);
  initProcessTimeline(gsap);
  initServicesReveal(gsap);
  initContactReveal(gsap);
}

function initShowreelReveal(gsap) {
  const section = document.querySelector(".showreel");
  if (!section || !window.ScrollTrigger) return;

  const inner = section.querySelector(".showreel__inner");
  const copy = section.querySelector(".showreel__copy");
  const card = section.querySelector(".showreel-card");
  const play = section.querySelector(".play-badge");
  const items = [copy, card, play].filter(Boolean);
  if (!items.length) return;

  inner?.classList.add("is-visible");

  gsap.fromTo(
    copy,
    { autoAlpha: 0, y: 10 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.75,
      ease: "power3.out",
      clearProps: "transform,visibility,opacity",
      scrollTrigger: {
        trigger: section,
        start: "top 82%",
        once: true,
      },
      onStart: () => copy?.classList.add("is-visible"),
    },
  );

  gsap.fromTo(
    card,
    { autoAlpha: 0, y: 12 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      delay: 0.12,
      ease: "power3.out",
      clearProps: "transform,visibility,opacity",
      scrollTrigger: {
        trigger: section,
        start: "top 82%",
        once: true,
      },
      onStart: () => card?.classList.add("is-visible"),
    },
  );

  gsap.fromTo(
    play,
    { autoAlpha: 0, y: 8 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.65,
      delay: 0.24,
      ease: "power3.out",
      clearProps: "transform,visibility,opacity",
      scrollTrigger: {
        trigger: section,
        start: "top 82%",
        once: true,
      },
    },
  );
}

function initContactReveal(gsap) {
  const panel = document.querySelector(".contact__panel");
  if (!panel || !window.ScrollTrigger) return;

  const items = gsap.utils.toArray("[data-reveal]", panel);
  if (!items.length) return;

  gsap.fromTo(
    items,
    { autoAlpha: 0, y: 10 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.12,
      clearProps: "transform,visibility,opacity",
      scrollTrigger: {
        trigger: panel,
        start: "top 82%",
        once: true,
      },
      onStart: () => items.forEach((item) => item.classList.add("is-visible")),
    },
  );
}

function initServicesReveal(gsap) {
  const list = document.querySelector("[data-services-list]");
  if (!list || !window.ScrollTrigger) return;

  const steps = gsap.utils.toArray("[data-service-step]", list);
  if (!steps.length) return;

  const setActiveService = (progress) => {
    const activeIndex = Math.min(steps.length - 1, Math.max(0, Math.floor(progress * steps.length)));
    list.style.setProperty("--services-progress", progress.toFixed(3));
    steps.forEach((step, index) => {
      step.classList.toggle("is-active", index <= activeIndex);
    });
  };

  steps.forEach((step) => {
    gsap.fromTo(
      step,
      { autoAlpha: 0.48, y: 12 },
      {
        autoAlpha: 0.86,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        clearProps: "transform,visibility,opacity",
        scrollTrigger: {
          trigger: step,
          start: "top 86%",
          once: true,
        },
        onStart: () => step.classList.add("is-visible-step"),
      },
    );
  });

  gsap.to(list, {
    "--services-progress": 1,
    ease: "none",
    scrollTrigger: {
      trigger: list,
      start: "top 78%",
      end: "bottom 48%",
      scrub: 0.8,
      onUpdate: (self) => setActiveService(self.progress),
      onEnter: () => setActiveService(0.02),
      onEnterBack: (self) => setActiveService(self.progress),
      onLeave: () => setActiveService(1),
    },
  });
}

function initProcessTimeline(gsap) {
  const timeline = document.querySelector("[data-process-timeline]");
  if (!timeline || !window.ScrollTrigger) return;

  const steps = gsap.utils.toArray("[data-process-step]", timeline);
  if (!steps.length) return;

  const setActiveStep = (progress) => {
    const activeIndex = Math.min(steps.length - 1, Math.max(0, Math.floor(progress * steps.length)));
    timeline.style.setProperty("--process-progress", progress.toFixed(3));
    timeline.classList.toggle("is-complete", progress >= 0.985);
    steps.forEach((step, index) => {
      step.classList.toggle("is-active", index <= activeIndex);
    });
  };

  steps.forEach((step) => {
    gsap.fromTo(
      step,
      { autoAlpha: 0.42, y: 10 },
      {
        autoAlpha: 0.86,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        clearProps: "transform,visibility,opacity",
        scrollTrigger: {
          trigger: step,
          start: "top 88%",
          once: true,
        },
        onStart: () => step.classList.add("is-visible-step"),
      },
    );
  });

  gsap.to(timeline, {
    "--process-progress": 1,
    ease: "none",
    scrollTrigger: {
      trigger: timeline,
      start: "top 78%",
      end: "bottom 48%",
      scrub: 0.7,
      onUpdate: (self) => setActiveStep(self.progress),
      onEnter: () => setActiveStep(0.02),
      onEnterBack: (self) => setActiveStep(self.progress),
      onLeave: () => setActiveStep(1),
    },
  });
}

function initProcessFallback() {
  const timeline = document.querySelector("[data-process-timeline]");
  if (!timeline) return;

  const steps = Array.from(timeline.querySelectorAll("[data-process-step]"));
  timeline.style.setProperty("--process-progress", "1");
  timeline.classList.add("is-complete");
  steps.forEach((step) => {
    step.classList.add("is-visible-step", "is-active");
  });
}

function initServicesFallback() {
  const list = document.querySelector("[data-services-list]");
  if (!list) return;

  const steps = Array.from(list.querySelectorAll("[data-service-step]"));
  list.style.setProperty("--services-progress", "1");
  steps.forEach((step) => {
    step.classList.add("is-visible-step", "is-active");
  });
}
