/**
 * GSAP + ScrollTrigger — анимации при скролле в премиум-версии.
 * Подключать после GSAP и ScrollTrigger (см. index-premium.html).
 */
(function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  var duration = 0.45;
  var ease = "power2.out";
  var startTrigger = "top 94%";

  // Начальное состояние для элементов, которые появятся при скролле
  gsap.set(".reveal", { opacity: 0, y: 24 });
  gsap.set(".cards .card", { opacity: 0, y: 20 });
  gsap.set(".skillgrid .skillgroup", { opacity: 0, y: 16 });
  gsap.set(".skillgrid .logo", { x: -20, opacity: 0 });
  gsap.set(".reveal-stagger > *", { opacity: 0, y: 12 });

  // Блоки .reveal
  gsap.utils.toArray(".reveal").forEach(function (el) {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: duration,
      ease: ease,
      scrollTrigger: {
        trigger: el,
        start: startTrigger,
        toggleActions: "play none none none",
      },
    });
  });

  // Карточки в .cards — появление с лёгкой задержкой по очереди
  gsap.utils.toArray(".cards .card").forEach(function (card, i) {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: duration,
      ease: ease,
      delay: i * 0.04,
      scrollTrigger: {
        trigger: card,
        start: startTrigger,
        toggleActions: "play none none none",
      },
    });
  });

  // Группы навыков — появление блока
  gsap.utils.toArray(".skillgrid .skillgroup").forEach(function (group, i) {
    gsap.to(group, {
      opacity: 1,
      y: 0,
      duration: duration,
      ease: ease,
      delay: i * 0.03,
      scrollTrigger: {
        trigger: group,
        start: startTrigger,
        toggleActions: "play none none none",
      },
    });
  });

  // Иконки навыков (.logo) — roll in + blur слева, с stagger (как в примере)
  gsap.utils.toArray(".skillgrid .skillgroup").forEach(function (group) {
    var logos = group.querySelectorAll(".logo");
    if (logos.length === 0) return;
    gsap.to(logos, {
      x: 0,
      opacity: 1,
      duration: 0.35,
      ease: ease,
      stagger: 0.035,
      scrollTrigger: {
        trigger: group,
        start: startTrigger,
        toggleActions: "play none none none",
      },
    });
  });

  // Список «Сильные стороны» — stagger детей
  gsap.utils.toArray(".reveal-stagger").forEach(function (container) {
    var children = container.querySelectorAll(":scope > *");
    if (children.length === 0) return;
    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: ease,
      stagger: 0.05,
      scrollTrigger: {
        trigger: container,
        start: startTrigger,
        toggleActions: "play none none none",
      },
    });
  });

  /* Параллакс hero отключён: scrub при скролле давал подвисания */
})();
