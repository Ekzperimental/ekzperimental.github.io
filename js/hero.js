export function initHero() {
  const backdrop = document.querySelector(".site-backdrop");
  if (!backdrop) return;
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const video = backdrop.querySelector("video");
  const control = document.querySelector("[data-hero-motion-control]");
  const hero = control?.closest(".hero");
  let wasReduced = motionPreference.matches;
  let userPaused = false;
  let ticking = false;

  const updateBackdrop = () => {
    const shift = motionPreference.matches ? 0 : Math.max(window.scrollY * -0.055, -140);
    backdrop.style.setProperty("--backdrop-shift", `${shift}px`);
    ticking = false;
  };

  const requestUpdate = () => {
    if (motionPreference.matches || ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateBackdrop);
  };

  const syncPlaybackState = () => {
    const playing = Boolean(video && !video.paused && !video.ended && !video.error);
    const paused = motionPreference.matches || !playing;
    backdrop.classList.toggle("is-background-paused", paused);
    hero?.classList.toggle("is-background-paused", paused);
    if (!control) return;
    control.dataset.state = playing && !motionPreference.matches ? "playing" : "paused";
    control.querySelector("#hero-background-pause-label").hidden = control.dataset.state !== "playing";
    control.querySelector("#hero-background-play-label").hidden = control.dataset.state === "playing";
    control.setAttribute("aria-labelledby", control.dataset.state === "playing"
      ? "hero-background-pause-label" : "hero-background-play-label");
    control.disabled = motionPreference.matches || !video;
  };

  const playBackground = () => {
    if (!video || motionPreference.matches || userPaused) return;
    try {
      video.play()?.catch(syncPlaybackState);
    } catch {
      syncPlaybackState();
    }
  };

  control?.addEventListener("click", () => {
    if (!video || motionPreference.matches) return;
    if (!video.paused && !video.ended && !video.error) {
      userPaused = true;
      video.pause();
    } else {
      userPaused = false;
      playBackground();
    }
    syncPlaybackState();
  });
  ["play", "pause", "ended", "emptied", "error"].forEach((event) => {
    video?.addEventListener(event, syncPlaybackState);
  });

  const syncMotionPreference = () => {
    if (motionPreference.matches) video?.pause();
    else if (wasReduced && video?.autoplay && !userPaused) playBackground();
    updateBackdrop();
    syncPlaybackState();
    wasReduced = motionPreference.matches;
  };

  syncMotionPreference();
  motionPreference.addEventListener("change", syncMotionPreference);
  window.addEventListener("scroll", requestUpdate, { passive: true });
}
