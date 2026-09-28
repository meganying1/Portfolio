// Mobile nav: toggles the full-viewport overlay and locks body scroll while open
function nav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("mobile-nav");
  if (!toggle || !menu) return;

  const links = menu.querySelectorAll(".mobile-nav__link");

  function setOpen(isOpen) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    menu.setAttribute("data-open", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
    if (isOpen) links[0]?.focus();
  }

  toggle.addEventListener("click", () => {
    setOpen(menu.getAttribute("data-open") !== "true");
  });

  links.forEach((link) => link.addEventListener("click", () => setOpen(false)));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.getAttribute("data-open") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
}

// Scroll reveals: fade/rise each .reveal into view once, then stop observing it
function reveal() {
  const items = document.querySelectorAll(".reveal");
  if (items.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  items.forEach((item) => observer.observe(item));
}

// Slide deck: steps through the exported slides one at a time
function deck() {
  const frame = document.querySelector("[data-deck]");
  if (!frame) return;

  const slides = frame.querySelectorAll(".deck__slide");
  if (slides.length === 0) return;

  const controls = document.querySelector("[data-deck-controls]");
  const prev = document.querySelector("[data-deck-prev]");
  const next = document.querySelector("[data-deck-next]");
  const count = document.querySelector("[data-deck-count]");

  let index = 0;

  function show(nextIndex) {
    index = Math.min(Math.max(nextIndex, 0), slides.length - 1);
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
    // preload the neighbour so stepping forward does not flash an empty frame
    slides[index + 1]?.removeAttribute("loading");
    if (count) count.textContent = `${index + 1} / ${slides.length}`;
    if (prev) prev.disabled = index === 0;
    if (next) next.disabled = index === slides.length - 1;
  }

  frame.setAttribute("data-enhanced", "true");
  controls?.removeAttribute("hidden");

  prev?.addEventListener("click", () => show(index - 1));
  next?.addEventListener("click", () => show(index + 1));

  // arrow keys work once either button has focus
  controls?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") show(index - 1);
    if (event.key === "ArrowRight") show(index + 1);
  });

  show(0);
}

nav();
reveal();
deck();
