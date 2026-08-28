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

// Hero typewriter: cycles role strings without reflowing the line (ghost span
// reserves width) and pauses while the tab is hidden.
function typewriter() {
  const liveEl = document.getElementById("typewriter");
  if (!liveEl) return;

  const words = ["an engineer", "a programmer", "a scientist"];
  const TYPE_DELAY = 55;
  const DELETE_DELAY = 30;
  const HOLD_DELAY = 2600;
  const PAUSE_DELAY = 400;

  let wordIndex = 0;

  function waitIfHidden(next, delay) {
    if (document.visibilityState !== "visible") {
      setTimeout(() => waitIfHidden(next, delay), delay);
      return;
    }
    next();
  }

  function typeWord() {
    const chars = words[wordIndex].split("");
    function typeNext() {
      waitIfHidden(() => {
        if (chars.length > 0) {
          liveEl.textContent += chars.shift();
          setTimeout(typeNext, TYPE_DELAY);
        } else {
          setTimeout(deleteWord, HOLD_DELAY);
        }
      }, TYPE_DELAY);
    }
    typeNext();
  }

  function deleteWord() {
    const chars = words[wordIndex].split("");
    function deleteNext() {
      waitIfHidden(() => {
        if (chars.length > 0) {
          chars.pop();
          liveEl.textContent = chars.join("");
          setTimeout(deleteNext, DELETE_DELAY);
        } else {
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeWord, PAUSE_DELAY);
        }
      }, DELETE_DELAY);
    }
    deleteNext();
  }

  typeWord();
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

nav();
typewriter();
reveal();
