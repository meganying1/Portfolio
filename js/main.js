// Progressive enhancement for the battery-door presentation.
// Without JavaScript, every slide remains available in document order.
function deck() {
  const frame = document.querySelector("[data-deck]");
  if (!frame) return;
  const slides = frame.querySelectorAll(".deck__slide");
  const controls = document.querySelector("[data-deck-controls]");
  const prev = document.querySelector("[data-deck-prev]");
  const next = document.querySelector("[data-deck-next]");
  const count = document.querySelector("[data-deck-count]");
  if (!slides.length || !controls || !prev || !next || !count) return;
  let index = 0;

  function show(nextIndex) {
    index = Math.min(Math.max(nextIndex, 0), slides.length - 1);
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
    slides[index + 1]?.removeAttribute("loading");
    count.textContent = `${index + 1} / ${slides.length}`;
    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;
  }

  frame.setAttribute("data-enhanced", "true");
  controls.hidden = false;
  prev.addEventListener("click", () => show(index - 1));
  next.addEventListener("click", () => show(index + 1));
  controls.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      show(index + (event.key === "ArrowLeft" ? -1 : 1));
    }
  });
  show(0);
}

deck();
