/**
 * Motion (motion.dev) — scroll reveal в стиле Framer Motion: spring, stagger.
 * Подключать как type="module" после app-premium.js.
 * Framer Motion работает только с React; Motion — тот же подход для vanilla JS.
 */
import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

const spring = { type: "spring", stiffness: 280, damping: 24 };

// inView передаёт (IntersectionObserverEntry, info) — элемент в entry.target
function elFromEntry(entryOrEl) {
  return entryOrEl && entryOrEl.target != null ? entryOrEl.target : entryOrEl;
}

// Блоки .reveal — появление при скролле (spring)
inView(
  ".reveal",
  (entryOrEl) => {
    const el = elFromEntry(entryOrEl);
    if (!el || !el.dataset) return;
    animate(
      el,
      { opacity: [0, 1], y: [24, 0] },
      { ...spring, delay: el.dataset.revealDelay ? Number(el.dataset.revealDelay) : 0 }
    );
  },
  { amount: 0.14, margin: "0px 0px -40px 0px" }
);

// Список .reveal-stagger — дети появляются по очереди (stagger)
inView(
  ".reveal-stagger",
  (entryOrEl) => {
    const container = elFromEntry(entryOrEl);
    if (!container || typeof container.querySelectorAll !== "function") return;
    const children = container.querySelectorAll(":scope > *");
    animate(
      children,
      { opacity: [0, 1], y: [12, 0] },
      { delay: stagger(0.08), ...spring }
    );
  },
  { amount: 0.2 }
);

// Карточки внутри .cards — лёгкий stagger при появлении
inView(
  ".cards .card",
  (entryOrEl) => {
    const el = elFromEntry(entryOrEl);
    if (el) animate(el, { opacity: [0, 1], y: [20, 0] }, spring);
  },
  { amount: 0.1, margin: "0px 0px -30px 0px" }
);

// .skillgroup — появление по группам
inView(
  ".skillgrid .skillgroup",
  (entryOrEl) => {
    const el = elFromEntry(entryOrEl);
    if (el) animate(el, { opacity: [0, 1], y: [16, 0] }, spring);
  },
  { amount: 0.1, margin: "0px 0px -30px 0px" }
);
