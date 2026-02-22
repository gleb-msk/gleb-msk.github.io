/**
 * Premium — sticky header, nav active underline (scroll spy), reveal-stagger.
 * Подключать после app.js.
 */
(function () {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  const sections = [];

  navLinks.forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    if (id === 'top') return;
    const section = document.getElementById(id);
    if (section) sections.push({ id, link, section });
  });

  var navIndicator = null;
  if (nav && navLinks.length > 0) {
    navIndicator = document.createElement('span');
    navIndicator.setAttribute('aria-hidden', 'true');
    navIndicator.className = 'nav__indicator nav__indicator--hidden';
    nav.appendChild(navIndicator);
  }

  function getHeaderHeight() {
    return header?.offsetHeight ?? 80;
  }

  function updateNavActive() {
    const scrollY = window.scrollY;
    const offset = getHeaderHeight() + 60;
    var current = null;
    for (var i = sections.length - 1; i >= 0; i--) {
      var top = sections[i].section.getBoundingClientRect().top + scrollY;
      if (scrollY >= top - offset) {
        current = sections[i].link;
        break;
      }
    }
    if (scrollY < 100) current = null;
    navLinks.forEach(function (link) {
      link.classList.toggle('nav__link--current', link === current);
    });
    if (navIndicator) {
      if (!current) {
        navIndicator.classList.add('nav__indicator--hidden');
        return;
      }
      navIndicator.classList.remove('nav__indicator--hidden');
      var r = current.getBoundingClientRect();
      var navRect = nav.getBoundingClientRect();
      navIndicator.style.left = (r.left - navRect.left + nav.scrollLeft) + 'px';
      navIndicator.style.width = r.width + 'px';
    }
  }

  function updateHeaderScrolled() {
    if (!header) return;
    const scrolled = window.scrollY > 60;
    header.classList.toggle('header--scrolled', scrolled);
  }

  let ticking = false;
  let lastRun = 0;
  const throttleMs = 120;
  function onScroll() {
    const now = Date.now();
    if (!ticking && now - lastRun >= throttleMs) {
      ticking = true;
      lastRun = now;
      requestAnimationFrame(() => {
        updateNavActive();
        updateHeaderScrolled();
        ticking = false;
      });
    }
  }
  /* Запуск при отпускании скролла, чтобы индикатор обновился */
  let scrollEndTimer;
  window.addEventListener('scroll', () => {
    onScroll();
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(() => {
      updateNavActive();
      updateHeaderScrolled();
    }, 150);
  }, { passive: true });
  window.addEventListener('resize', updateNavActive);
  updateNavActive();
  updateHeaderScrolled();

  /* Reveal-stagger: показ списков с задержкой по элементам */
  const staggerContainers = document.querySelectorAll('.reveal-stagger');
  if (typeof IntersectionObserver !== 'undefined' && staggerContainers.length > 0) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { root: null, threshold: 0.2, rootMargin: '0px 0px -20px 0px' }
    );
    staggerContainers.forEach((el) => io.observe(el));
  }
})();
