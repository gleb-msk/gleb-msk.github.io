(function(){
  const root = document.documentElement;
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Плавное появление страницы
  if (document.body) document.body.classList.add('page-load');
  const showPage = () => {
    if (!document.body) return;
    document.body.classList.remove('page-load');
    document.body.classList.add('loaded');
  };
  const onReady = () => {
    requestAnimationFrame(showPage);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady);
  else onReady();
  // Запас: если по ошибке JS страница так и не показалась — показать через 2.5 с
  setTimeout(function () {
    if (document.body && document.body.classList.contains('page-load')) showPage();
  }, 2500);

  // Theme: сохранённый выбор или системная тема
  const themeBtn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    root.setAttribute('data-theme', 'light');
  } else if (saved !== 'dark' && typeof window.matchMedia !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    root.setAttribute('data-theme', 'light');
  }

  const setToggleState = () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    if (themeBtn) {
      themeBtn.classList.toggle('theme-toggle--light', isLight);
      themeBtn.setAttribute('aria-label', isLight ? 'Включить тёмную тему' : 'Включить светлую тему');
    }
  };
  setToggleState();

  themeBtn?.addEventListener('click', () => {
    root.classList.add('theme-transition');
    const isLight = root.getAttribute('data-theme') === 'light';
    if (isLight) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme','dark');
    } else {
      root.setAttribute('data-theme','light');
      localStorage.setItem('theme','light');
    }
    setToggleState();
    updateThemeColor();
    setTimeout(() => root.classList.remove('theme-transition'), 400);
  });
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  function updateThemeColor() {
    if (!themeColorMeta) return;
    const isLight = root.getAttribute('data-theme') === 'light';
    themeColorMeta.setAttribute('content', isLight ? '#f7f8fb' : '#0b1020');
  }
  updateThemeColor();

  // Mobile menu
  const burger = document.getElementById('burger');
  const mobile = document.getElementById('mobileMenu');
  const toggleMobile = (open) => {
    if (!mobile) return;
    const isOpen = open ?? !mobile.classList.contains('open');
    mobile.classList.toggle('open', isOpen);
    burger?.classList.toggle('open', isOpen);
    mobile.setAttribute('aria-hidden', String(!isOpen));
    burger?.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) {
      const focusable = mobile.querySelectorAll('a[href], button');
      const first = focusable[0];
      if (first) setTimeout(() => first.focus(), 100);
    } else {
      burger?.focus();
    }
  };
  burger?.addEventListener('click', () => toggleMobile());
  mobile?.addEventListener('click', (e) => {
    const el = e.target;
    if (el && el.classList && el.classList.contains('mobile__link')) toggleMobile(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobile?.classList.contains('open')) toggleMobile(false);
    if (e.key !== 'Tab' || !mobile?.classList.contains('open')) return;
    const focusable = Array.from(mobile.querySelectorAll('a[href], button'));
    if (focusable.length === 0) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Smooth anchor с отступом под шапку
  const headerEl = document.querySelector('.header');
  const headerOffset = headerEl ? headerEl.offsetHeight : 80;
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const scrollTop = id === 'top' ? 0 : target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    history.replaceState(null, '', href);
  });

  // Small toast on download click (no overlay)
  const toast = document.getElementById('toast');
  const showToast = (text) => {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add('show');
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(()=>toast.classList.remove('show'), 1300);
  };
  document.getElementById('cvDownload')?.addEventListener('click', () => showToast('Скачиваю резюме…'));
  // Prefetch PDF при наведении на кнопку «Скачать резюме» (быстрее скачивание)
  const cvLink = document.getElementById('cvDownload');
  if (cvLink && !cvLink.dataset.prefetched) {
    cvLink.addEventListener('mouseenter', () => {
      if (cvLink.dataset.prefetched) return;
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = 'cv.pdf';
      document.head.appendChild(link);
      cvLink.dataset.prefetched = '1';
    }, { once: true });
  }
  document.querySelectorAll('a[download="Gleb_Moskalev_CV.pdf"]').forEach(el => {
    if (el === cvLink || el.dataset.prefetched) return;
    el.addEventListener('mouseenter', () => {
      if (el.dataset.prefetched) return;
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = 'cv.pdf';
      document.head.appendChild(link);
      el.dataset.prefetched = '1';
    }, { once: true });
  });

  // Копирование email в буфер
  document.querySelectorAll('.contact__copy[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const value = btn.getAttribute('data-copy') || '';
      if (!value) return;
      navigator.clipboard.writeText(value).then(() => {
        showToast('Email скопирован');
      }).catch(() => showToast('Не удалось скопировать'));
    });
  });

  // Scroll spy: подсветка текущего раздела в навигации
  const sections = ['about', 'skills', 'projects', 'experience', 'contacts'];
  const sectionEls = sections.map(id => document.getElementById(id)).filter(Boolean);
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  const mobileLinks = document.querySelectorAll('.mobile__link[href^="#"]');
  const setCurrent = (id) => {
    navLinks.forEach(a => {
      const active = (a.getAttribute('href') || '') === '#' + id;
      a.classList.toggle('nav__link--current', active);
      a.setAttribute('aria-current', active ? 'page' : '');
    });
    mobileLinks.forEach(a => {
      const active = (a.getAttribute('href') || '') === '#' + id;
      a.classList.toggle('mobile__link--current', active);
      a.setAttribute('aria-current', active ? 'page' : '');
    });
  };
  const onScrollSpy = () => {
    const top = window.scrollY + 120;
    let current = null;
    sectionEls.forEach(el => {
      if (el.offsetTop <= top) current = el.id;
    });
    if (current) setCurrent(current);
  };
  window.addEventListener('scroll', onScrollSpy, { passive: true });
  onScrollSpy();

  // Кнопка «Наверх»: показывать после прокрутки
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    const onScrollTop = () => {
      const show = window.scrollY > 400;
      backToTop.classList.toggle('back-to-top--visible', show);
    };
    window.addEventListener('scroll', onScrollTop, { passive: true });
    onScrollTop();
  }
})();

// Replace missing logos with nice fallback badge (avoid broken icon/alt text)
(function(){
  const imgs = document.querySelectorAll('img[data-fallback]');
  imgs.forEach(img => {
    img.addEventListener('error', () => {
      const fb = img.getAttribute('data-fallback') || '';
      const wrap = document.createElement('div');
      wrap.className = 'logoFallback';
      wrap.textContent = fb;
      img.replaceWith(wrap);
    }, { once: true });
  });
})();


// --- ULTRA: scroll reveal для всех блоков ---
(() => {
  const targets = document.querySelectorAll(
    '.section__title-wrap, .section__head, .section__title, .section__lead, .section__hint, ' +
    '.card, .skillgroup, .contact__links, .contact__card, .footer__inner'
  );
  if (!('IntersectionObserver' in window) || targets.length === 0) return;

  targets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { root: null, threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  targets.forEach(el => io.observe(el));

  // Scroll progress bar
  const progress = document.getElementById("scrollProgress");
  const updateProgress = () => {
    if (!progress) return;
    const h = document.documentElement;
    const scrollTop = h.scrollTop || document.body.scrollTop;
    const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
    const p = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progress.style.width = `${p}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
})();
