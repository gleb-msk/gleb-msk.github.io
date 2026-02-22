/**
 * RU/EN translations for portfolio. Use data-i18n="key" for text, data-i18n-html="key" for HTML.
 */
(function () {
  const translations = {
    ru: {
      skip: 'Перейти к контенту',
      navAbout: 'Обо мне',
      navSkills: 'Навыки',
      navProjects: 'Проекты',
      navExperience: 'Опыт',
      navContacts: 'Контакты',
      ariaTheme: 'Переключить тему: светлая/тёмная',
      btnCv: 'Скачать резюме',
      ariaBurger: 'Открыть меню',
      heroPill1: 'DevOps Engineer',
      heroPill2: '2+ года коммерческого опыта',
      heroPill3: 'Удалённо',
      heroTitle: 'Глеб Москалёв',
      heroSubtitle: 'Эксплуатация и развитие production/stage инфраструктуры: Docker/Compose, GitLab CI/CD, Nginx/TLS, DNS/Proxy, Postgres/Redis, мониторинг и инциденты.',
      heroQuickFocus: 'Фокус',
      heroQuickFocusVal: 'стабильные релизы, воспроизводимость, self‑healing, rollback/backup',
      heroQuickCity: 'Город',
      heroQuickCityVal: 'Краснодар',
      heroQuickContacts: 'Контакты',
      heroCtaProjects: 'Смотреть проекты',
      heroCtaContact: 'Связаться',
      heroStrengthsTitle: 'Сильные стороны',
      heroStrengths1: 'Диагностика 502/504, рестарты контейнеров, алерты/логирование.',
      heroStrengths2: 'Релизы без простоя: health‑checks, миграции, rollback.',
      heroStrengths3: 'DNS/edge: Cloudflare/GoDaddy, TLS (Let\'s Encrypt), reverse‑proxy.',
      sectionAboutTitle: 'Обо мне',
      sectionAboutLead: 'Middle DevOps-инженер с практическим опытом поддержки и развития веб‑платформ на Linux. Ставлю цель: быстрые, безопасные релизы и стабильная работа сервисов после обновлений.',
      aboutCard1Title: 'Что делаю руками',
      aboutCard1Text: 'Docker/Compose окружения (frontend/backend/db), Nginx как edge, GitLab CI/CD (build → push → deploy), миграции БД в релизном процессе, backup/restore, мониторинг и разбор инцидентов.',
      aboutCard2Title: 'Как работаю',
      aboutCard2Text: 'В первую очередь — восстановить доступность (reduce blast radius), затем найти root cause, зафиксировать в документации и добавить защиту (алерты, лимиты, health‑checks, runbooks).',
      sectionSkillsTitle: 'Навыки',
      sectionSkillsHint: 'Технологии, с которыми работал/работаю (часть — в процессе изучения).',
      tagLearning: 'изучаю',
      sectionProjectsTitle: 'Проекты',
      sectionProjectsHint: '2–3 ключевых кейса + инфраструктурные задачи.',
      project1Title: 'Technorely — prod/stage и preview окружения',
      project1Text: 'Docker Compose (frontend/backend/PostgreSQL/Redis), Nginx edge (TLS Let\'s Encrypt), GitLab CI/CD релизы, миграции БД, rollback и восстановление из дампа, preview стенды для feat/*.',
      project2Title: 'Careclix — тестовые окружения и домены',
      project2Text: 'Изолированные стенды для dev/QA: Docker/Compose на VM, поддомены, reverse‑proxy, SSL по необходимости. Основная платформа компании — GitHub + GCP/Kubernetes (миграцию делала другая команда).',
      project3Title: 'Korporatio — CI/CD и Deploy (Web + Solana)',
      project3Text: 'Развёртывание frontend+backend из GitLab: сборка образов, деплой окружений, конфиги и reverse‑proxy. CI для задач сборки/проверок смарт‑контрактов Solana, воспроизводимые релизы.',
      project4Title: 'On The Mend — поддержка AWS окружений',
      project4Text: 'Эксплуатация сервисов в AWS: ECS/EC2, балансировка через ALB, DNS Route53, RDS (PostgreSQL), ElastiCache (Redis), S3, наблюдаемость в CloudWatch.',
      sectionExperienceTitle: 'Опыт и подход',
      expCard1Title: 'Инциденты',
      expCard1Text: 'Сначала проверяю доступность upstream: Nginx, порты, pods/containers, логи, нагрузку (CPU/RAM/Disk), затем устраняю причину и добавляю профилактику (алерты, лимиты, автоперезапуски, документация).',
      expCard2Title: 'CI/CD (значимый опыт)',
      expCard2Text: 'Перевёл ручные выкладки на GitLab CI/CD: сборка → публикация образов → деплой по SSH с безопасным reload Nginx. Встроил миграции БД и health‑checks, добавил rollback по тегам.',
      expCard3Title: 'Мониторинг',
      expCard3Text: 'Обычно отслеживаю CPU, RAM, диск, сеть, количество соединений/ошибок, latency и RPS, а также метрики БД и очередь/ретраи приложений.',
      sectionContactsTitle: 'Контакты',
      sectionContactsLead: 'Открыт к предложениям (удалённо). Напишите в Telegram или на почту — отвечу в течение дня.',
      contactCopy: 'Копировать',
      contactCopyAria: 'Скопировать email',
      contactTelegramTitle: 'Открыть в Telegram',
      contactCity: 'Город',
      contactCityVal: 'Краснодар (удалённо)',
      contactCardTitle: 'Быстрое действие',
      contactCardText: 'Можно сразу скачать PDF и переслать в HR/руководителю.',
      footerUpdated: 'Обновлено 22 февраля 2026',
      footerTop: 'Наверх',
      footerMade: 'Сделано на HTML/CSS/JS · Деплой в Kubernetes (minikube)',
      counterVisits: 'Просмотров',
      counterVisitors: 'Посетителей',
      ariaBackToTop: 'Наверх',
      brandAria: 'Наверх',
      metaTitle: 'Глеб Москалёв — DevOps Engineer',
      metaDesc: 'Портфолио DevOps-инженера: проекты, навыки, опыт, контакты. Скачать резюме (PDF).'
    },
    en: {
      skip: 'Skip to content',
      navAbout: 'About',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navExperience: 'Experience',
      navContacts: 'Contact',
      ariaTheme: 'Toggle theme: light/dark',
      btnCv: 'Download CV',
      ariaBurger: 'Open menu',
      heroPill1: 'DevOps Engineer',
      heroPill2: '2+ years commercial experience',
      heroPill3: 'Remote',
      heroTitle: 'Gleb Moskalev',
      heroSubtitle: 'Running and evolving production/stage infrastructure: Docker/Compose, GitLab CI/CD, Nginx/TLS, DNS/Proxy, Postgres/Redis, monitoring and incidents.',
      heroQuickFocus: 'Focus',
      heroQuickFocusVal: 'stable releases, reproducibility, self‑healing, rollback/backup',
      heroQuickCity: 'City',
      heroQuickCityVal: 'Krasnodar',
      heroQuickContacts: 'Contacts',
      heroCtaProjects: 'View projects',
      heroCtaContact: 'Get in touch',
      heroStrengthsTitle: 'Strengths',
      heroStrengths1: 'Diagnosing 502/504, container restarts, alerts and logging.',
      heroStrengths2: 'Zero-downtime releases: health‑checks, migrations, rollback.',
      heroStrengths3: 'DNS/edge: Cloudflare/GoDaddy, TLS (Let\'s Encrypt), reverse‑proxy.',
      sectionAboutTitle: 'About me',
      sectionAboutLead: 'Middle DevOps engineer with hands-on experience supporting and evolving Linux-based web platforms. Focus: fast, safe releases and stable services after updates.',
      aboutCard1Title: 'What I do',
      aboutCard1Text: 'Docker/Compose environments (frontend/backend/db), Nginx as edge, GitLab CI/CD (build → push → deploy), DB migrations in release process, backup/restore, monitoring and incident response.',
      aboutCard2Title: 'How I work',
      aboutCard2Text: 'First restore availability (reduce blast radius), then find root cause, document it and add safeguards (alerts, limits, health‑checks, runbooks).',
      sectionSkillsTitle: 'Skills',
      sectionSkillsHint: 'Technologies I work or have worked with (some in progress).',
      tagLearning: 'learning',
      sectionProjectsTitle: 'Projects',
      sectionProjectsHint: '2–3 key cases and infrastructure work.',
      project1Title: 'Technorely — prod/stage and preview environments',
      project1Text: 'Docker Compose (frontend/backend/PostgreSQL/Redis), Nginx edge (TLS Let\'s Encrypt), GitLab CI/CD releases, DB migrations, rollback and restore from dump, preview envs for feat/*.',
      project2Title: 'Careclix — test environments and domains',
      project2Text: 'Isolated dev/QA stacks: Docker/Compose on VM, subdomains, reverse‑proxy, SSL where needed. Company main platform is GitHub + GCP/Kubernetes (migration by another team).',
      project3Title: 'Korporatio — CI/CD and Deploy (Web + Solana)',
      project3Text: 'Deploying frontend+backend from GitLab: image builds, environment deploy, configs and reverse‑proxy. CI for Solana smart contract build/checks, reproducible releases.',
      project4Title: 'On The Mend — AWS environment support',
      project4Text: 'Operating services on AWS: ECS/EC2, ALB load balancing, Route53 DNS, RDS (PostgreSQL), ElastiCache (Redis), S3, observability in CloudWatch.',
      sectionExperienceTitle: 'Experience & approach',
      expCard1Title: 'Incidents',
      expCard1Text: 'First check upstream availability: Nginx, ports, pods/containers, logs, load (CPU/RAM/Disk), then fix the cause and add prevention (alerts, limits, auto-restarts, docs).',
      expCard2Title: 'CI/CD (solid experience)',
      expCard2Text: 'Moved manual deploys to GitLab CI/CD: build → push images → deploy via SSH with safe Nginx reload. Wired in DB migrations and health‑checks, added tag-based rollback.',
      expCard3Title: 'Monitoring',
      expCard3Text: 'Typically track CPU, RAM, disk, network, connection/error counts, latency and RPS, plus DB metrics and app queue/retries.',
      sectionContactsTitle: 'Contact',
      sectionContactsLead: 'Open to offers (remote). Message on Telegram or email — I\'ll reply within a day.',
      contactCopy: 'Copy',
      contactCopyAria: 'Copy email',
      contactTelegramTitle: 'Open in Telegram',
      contactCity: 'City',
      contactCityVal: 'Krasnodar (remote)',
      contactCardTitle: 'Quick action',
      contactCardText: 'Download the PDF and forward to HR or hiring manager.',
      footerUpdated: 'Updated Feb 22, 2026',
      footerTop: 'Back to top',
      footerMade: 'Built with HTML/CSS/JS · Deployed with Kubernetes (minikube)',
      counterVisits: 'Visits',
      counterVisitors: 'Visitors',
      ariaBackToTop: 'Back to top',
      brandAria: 'Back to top',
      metaTitle: 'Gleb Moskalev — DevOps Engineer',
      metaDesc: 'DevOps engineer portfolio: projects, skills, experience, contact. Download CV (PDF).'
    }
  };

  const STORAGE_KEY = 'portfolio-lang';
  const DEFAULT_LANG = 'ru';

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ru' || stored === 'en') return stored;
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function t(lang, key) {
    return translations[lang][key] != null ? translations[lang][key] : (translations[DEFAULT_LANG][key] || key);
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.title = t(lang, 'metaTitle');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t(lang, 'metaDesc');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const value = t(lang, key);
      if (el.getAttribute('aria-label')) el.setAttribute('aria-label', value);
      else el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(lang, key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(lang, key);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.setAttribute('title', t(lang, el.getAttribute('data-i18n-title')));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(lang, el.getAttribute('data-i18n-aria')));
    });

    var langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.setAttribute('aria-label', lang === 'ru' ? 'English' : 'Русский');
      langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
    }
  }

  function initLang() {
    var lang = getLang();
    applyLang(lang);

    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = getLang() === 'ru' ? 'en' : 'ru';
        setLang(next);
        applyLang(next);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }
})();
