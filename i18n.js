/**
 * RU/EN translations for portfolio. Use data-i18n="key" for text, data-i18n-html="key" for HTML.
 */
(function () {
  const translations = {
    ru: {
      skip: 'Перейти к контенту',
      navAbout: 'Обо мне',
      navCareer: 'Карьера',
      navEducation: 'Образование',
      navSkills: 'Навыки',
      navProjects: 'Проекты',
      navExperience: 'Опыт',
      navContacts: 'Контакты',
      ariaTheme: 'Переключить тему: светлая/тёмная',
      btnCv: 'Скачать резюме',
      cvDate: 'Резюме актуально на февраль 2026',
      ariaBurger: 'Открыть меню',
      heroPill1: 'DevOps Engineer',
      heroPill2: '2+ года в production',
      heroPill3: 'Удалённо',
      heroTitle: 'Глеб Москалёв',
      heroSubtitle: 'Обеспечиваю стабильную работу production и stage: контейнеры, CI/CD, мониторинг. Релизы без сюрпризов, сбои — под контролем.',
      heroQuickFocus: 'Фокус',
      heroQuickFocusVal: 'релизы без простоя, быстрый откат, меньше инцидентов',
      heroQuickCity: 'Город',
      heroQuickCityVal: 'Краснодар',
      heroQuickContacts: 'Контакты',
      heroCtaProjects: 'Смотреть проекты',
      heroCtaTelegram: 'Написать в Telegram',
      heroCtaContact: 'Связаться',
      heroTagline: 'Релизы без простоя. Команда выкатывает быстрее — инфраструктура под контролем.',
      heroStripLabel: 'Основной стек',
      heroKeywords: 'DevOps · CI/CD · Docker · Kubernetes · AWS · Мониторинг',
      heroStrengthsTitle: 'Сильные стороны',
      heroStrengths1: 'Быстро нахожу причину сбоев и возвращаю сервис в строй — логи, метрики, алерты.',
      heroStrengths2: 'Релизы без простоя: продуманные health‑checks, миграции БД, откат за минуты.',
      heroStrengths3: 'Надёжный edge: DNS, TLS, reverse‑proxy — сервис доступен и защищён.',
      sectionAboutTitle: 'Обо мне',
      sectionAboutLead: 'DevOps-инженер с опытом в production: делаю так, чтобы релизы проходили без простоя, а сбои не повторялись. Фокус — быстрая доставка и стабильность сервисов.',
      aboutCard1Title: 'Чем полезен',
      aboutCard1Text: 'Поднимаю и веду окружения под ключ: контейнеры, Nginx, CI/CD от сборки до деплоя, миграции БД в релизе, бэкапы и восстановление. Плюс мониторинг и разбор инцидентов — сервис под контролем.',
      aboutCard2Title: 'Подход к сбоям',
      aboutCard2Text: 'Сначала возвращаю доступность и ограничиваю зону влияния, затем ищу причину и фиксирую в документации. Добавляю защиту: алерты, лимиты, health‑checks и runbooks, чтобы инцидент не повторился.',
      sectionCareerTitle: 'Карьера',
      sectionCareerHint: 'Компании и роли за последние годы.',
      sectionEducationTitle: 'Образование',
      sectionEducationHint: 'Вуз и стажировка.',
      edu1Period: 'сен 2018 — июн 2020',
      edu1Name: 'Национальный юридический университет им. Ярослава Мудрого',
      edu1Role: 'Высшее образование',
      edu2Period: 'сен 2023 — дек 2023',
      edu2Role: 'DevOps Intern (стажировка)',
      career0Period: 'сен 2023 — дек 2023',
      career0Role: 'DevOps Intern (стажировка)',
      career1Period: 'дек 2023 — н.в.',
      career1Role: 'DevOps Engineer',
      career2Period: 'дек 2023 — н.в.',
      career2Role: 'DevOps Engineer (AWS)',
      career3Period: 'дек 2023 — н.в.',
      career3Role: 'DevOps Engineer (Web + Solana)',
      career4Period: 'дек 2023 — н.в.',
      career4Role: 'DevOps Engineer',
      sectionSkillsTitle: 'Навыки',
      sectionSkillsHint: 'Инструменты и стек, с которыми работаю в production (часть — в активной практике).',
      tagLearning: 'изучаю',
      sectionProjectsTitle: 'Проекты',
      sectionProjectsHint: 'Ключевые кейсы: что сделал и какой результат.',
      projectLink1: 'Сайт: technorely.com',
      projectLink2: 'Сайт: careclix.com',
      projectLink3: 'Сайт: korporatio.com',
      projectLink4: 'Сайт: onthemend.com',
      project1Title: 'Technorely — стабильный prod и preview для команды',
      project1Text: 'Поддержка и развитие инфраструктуры веб-платформы: Docker Compose (frontend/backend/Postgres/Redis), Nginx + TLS, GitLab CI/CD с деплоем по тегам. Встроил миграции БД в релиз, откат и восстановление из дампа. Поднял preview-окружения для веток feat/* — команда проверяет фичи до мержа без риска для prod. Миграции и откат в одном пайплайне — меньше ручных шагов, откат при сбое за минуты.',
      project2Title: 'Careclix — изолированные стенды для dev и QA',
      project2Text: 'Развёртывание и сопровождение тестовых окружений: Docker/Compose на VM, поддомены, reverse‑proxy, SSL по необходимости. Команда получает стабильные стенды для разработки и проверок. Основная платформа компании — GitHub + GCP/Kubernetes (миграцию вела другая команда); я обеспечивал временные Docker-окружения и инфраструктурную поддержку.',
      project3Title: 'Korporatio — CI/CD для Web и Solana',
      project3Text: 'Деплой frontend и backend из GitLab: сборка образов, окружения, конфиги, reverse‑proxy. Настроил CI/CD для бэкенда и смарт-контрактов Solana — воспроизводимые сборки и единый процесс доставки. После обновлений держу стабильность: диагностика, логи, правки деплоя.',
      project4Title: 'On The Mend — production в AWS под контролем',
      project4Text: 'Поддержка prod/stage в облаке: ECS/EC2, ALB, Route53, RDS (PostgreSQL), ElastiCache (Redis), S3. Мониторинг и разбор инцидентов через CloudWatch. Результат — сервисы стабильны после релизов, сбои разбираются и закрываются профилактикой.',
      sectionExperienceTitle: 'Опыт и подход',
      expCard1Title: 'Инциденты',
      expCard1Text: 'Быстро возвращаю сервис в строй: проверка upstream (Nginx, порты, контейнеры), логи, нагрузка. Устраняю причину и закрепляю результат — алерты, лимиты, автоперезапуски и документация, чтобы подобное не повторилось.',
      expCard2Title: 'CI/CD',
      expCard2Text: 'Перевёл ручные выкладки в GitLab CI/CD: сборка → образы → деплой по SSH с безопасным reload Nginx. Встроил миграции БД и health‑checks, откат по тегам — релизы предсказуемые и без простоя.',
      expCard3Title: 'Мониторинг',
      expCard3Text: 'Держу под контролем то, от чего зависит стабильность: CPU, RAM, диск, сеть, соединения и ошибки, latency, RPS, метрики БД и очереди приложений. Цель — заметить проблему до пользователя.',
      sectionContactsTitle: 'Контакты',
      sectionContactsLead: 'Открыт к предложениям. Напишите в Telegram или на почту — отвечу в течение дня.',
      contactLooking: 'Ищу позицию Junior или Middle DevOps. Готов подтвердить уровень на собеседовании и к тестовому заданию. Удалённо или релокация. CI/CD, контейнеры, мониторинг.',
      contactCopy: 'Копировать',
      contactCopyAria: 'Скопировать email',
      contactTelegramTitle: 'Открыть в Telegram',
      contactCity: 'Город',
      contactCityVal: 'Краснодар (удалённо)',
      contactLanguages: 'Языки',
      contactLanguagesVal: 'Русский — родной, English B1',
      contactCardTitle: 'Быстрое действие',
      contactCardText: 'Скачайте актуальное резюме в PDF — удобно отправить в ATS или переслать HR и руководителю.',
      footerUpdated: 'Обновлено 25 февраля 2026',
      footerTop: 'Наверх',
      footerMade: 'Сделано на HTML/CSS/JS · Локально: Kubernetes (minikube), в интернет: GitHub Pages',
      counterVisits: 'Просмотров',
      counterVisitors: 'Посетителей',
      ariaBackToTop: 'Наверх',
      brandAria: 'Наверх',
      metaTitle: 'Глеб Москалёв — DevOps Engineer',
      metaDesc: 'DevOps с опытом в production: релизы без простоя, CI/CD, контейнеры, мониторинг. Открыт к Junior/Middle. Резюме (PDF), контакты.'
    },
    en: {
      skip: 'Skip to content',
      navAbout: 'About',
      navCareer: 'Career',
      navEducation: 'Education',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navExperience: 'Experience',
      navContacts: 'Contact',
      ariaTheme: 'Toggle theme: light/dark',
      btnCv: 'Download CV',
      cvDate: 'CV updated February 2026',
      ariaBurger: 'Open menu',
      heroPill1: 'DevOps Engineer',
      heroPill2: '2+ years in production',
      heroPill3: 'Remote',
      heroTitle: 'Gleb Moskalev',
      heroSubtitle: 'I keep production and stage stable: containers, CI/CD, monitoring. Predictable releases, incidents under control.',
      heroQuickFocus: 'Focus',
      heroQuickFocusVal: 'zero-downtime releases, fast rollback, fewer incidents',
      heroQuickCity: 'City',
      heroQuickCityVal: 'Krasnodar',
      heroQuickContacts: 'Contacts',
      heroCtaProjects: 'View projects',
      heroCtaTelegram: 'Message on Telegram',
      heroCtaContact: 'Get in touch',
      heroTagline: 'Zero-downtime releases. Teams ship faster — infrastructure under control.',
      heroStripLabel: 'Main stack',
      heroKeywords: 'DevOps · CI/CD · Docker · Kubernetes · AWS · Monitoring',
      heroStrengthsTitle: 'Strengths',
      heroStrengths1: 'Find root cause and restore service fast — logs, metrics, alerts.',
      heroStrengths2: 'Zero-downtime releases: solid health‑checks, DB migrations, rollback in minutes.',
      heroStrengths3: 'Reliable edge: DNS, TLS, reverse‑proxy — secure and available.',
      sectionAboutTitle: 'About me',
      sectionAboutLead: 'DevOps engineer with production experience: I make sure releases run without downtime and failures don’t repeat. Focus on fast delivery and service stability.',
      aboutCard1Title: 'What I bring',
      aboutCard1Text: 'I build and run environments end-to-end: containers, Nginx, CI/CD from build to deploy, DB migrations in release, backup and restore. Plus monitoring and incident response — services under control.',
      aboutCard2Title: 'How I handle incidents',
      aboutCard2Text: 'First restore availability and limit blast radius, then find root cause and document it. I add safeguards: alerts, limits, health‑checks and runbooks so the same incident doesn’t happen again.',
      sectionCareerTitle: 'Career',
      sectionCareerHint: 'Companies and roles in recent years.',
      sectionEducationTitle: 'Education',
      sectionEducationHint: 'University and internship.',
      edu1Period: 'Sep 2018 — Jun 2020',
      edu1Name: 'Yaroslav the Wise National Law University',
      edu1Role: 'Higher education',
      edu2Period: 'Sep 2023 — Dec 2023',
      edu2Role: 'DevOps Intern',
      career0Period: 'Sep 2023 — Dec 2023',
      career0Role: 'DevOps Intern',
      career1Period: 'Dec 2023 — present',
      career1Role: 'DevOps Engineer',
      career2Period: 'Dec 2023 — present',
      career2Role: 'DevOps Engineer (AWS)',
      career3Period: 'Dec 2023 — present',
      career3Role: 'DevOps Engineer (Web + Solana)',
      career4Period: 'Dec 2023 — present',
      career4Role: 'DevOps Engineer',
      sectionSkillsTitle: 'Skills',
      sectionSkillsHint: 'Tools and stack I use in production (some in active practice).',
      tagLearning: 'learning',
      sectionProjectsTitle: 'Projects',
      sectionProjectsHint: 'Key cases: what I did and the outcome.',
      projectLink1: 'Site: technorely.com',
      projectLink2: 'Site: careclix.com',
      projectLink3: 'Site: korporatio.com',
      projectLink4: 'Site: onthemend.com',
      project1Title: 'Technorely — stable prod and preview for the team',
      project1Text: 'Support and evolution of the web platform infrastructure: Docker Compose (frontend/backend/Postgres/Redis), Nginx + TLS, GitLab CI/CD with tag-based deploy. Wired DB migrations into release, rollback and restore from dump. Set up preview environments for feat/* branches — team can test before merge without risking prod. Migrations and rollback in one pipeline — fewer manual steps, rollback in minutes when things break.',
      project2Title: 'Careclix — isolated dev and QA environments',
      project2Text: 'Deploy and support of test environments: Docker/Compose on VM, subdomains, reverse‑proxy, SSL when needed. Team gets stable stacks for development and QA. Company main platform is GitHub + GCP/Kubernetes (migration by another team); I provided temporary Docker environments and infra support.',
      project3Title: 'Korporatio — CI/CD for Web and Solana',
      project3Text: 'Deploy frontend and backend from GitLab: image builds, environments, configs, reverse‑proxy. Set up CI/CD for backend and Solana smart contracts — reproducible builds and a single delivery process. Keep services stable after updates: diagnostics, logs, deploy fixes.',
      project4Title: 'On The Mend — production in AWS under control',
      project4Text: 'Support prod/stage in the cloud: ECS/EC2, ALB, Route53, RDS (PostgreSQL), ElastiCache (Redis), S3. Monitoring and incident response via CloudWatch. Result: services stay stable after releases, incidents are resolved and followed by prevention.',
      sectionExperienceTitle: 'Experience & approach',
      expCard1Title: 'Incidents',
      expCard1Text: 'Get the service back up fast: check upstream (Nginx, ports, containers), logs, load. Fix the cause and lock it in with alerts, limits, auto-restarts and docs so it doesn’t happen again.',
      expCard2Title: 'CI/CD',
      expCard2Text: 'Moved manual deploys to GitLab CI/CD: build → images → deploy via SSH with safe Nginx reload. Wired in DB migrations and health‑checks, tag-based rollback — predictable, zero-downtime releases.',
      expCard3Title: 'Monitoring',
      expCard3Text: 'Keep an eye on what affects stability: CPU, RAM, disk, network, connections and errors, latency, RPS, DB and app queue metrics. Goal: spot issues before users do.',
      sectionContactsTitle: 'Contact',
      sectionContactsLead: 'Open to offers. Message on Telegram or email — I\'ll reply within a day.',
      contactLooking: 'Looking for a Junior or Middle DevOps role. Happy to demonstrate my level at an interview and complete a test task. Remote or relocation. CI/CD, containers, monitoring.',
      contactCopy: 'Copy',
      contactCopyAria: 'Copy email',
      contactTelegramTitle: 'Open in Telegram',
      contactCity: 'City',
      contactCityVal: 'Krasnodar (remote)',
      contactLanguages: 'Languages',
      contactLanguagesVal: 'Russian — native, English B1',
      contactCardTitle: 'Quick action',
      contactCardText: 'Download the up-to-date CV in PDF — easy to upload to ATS or send to HR and hiring manager.',
      footerUpdated: 'Updated Feb 25, 2026',
      footerTop: 'Back to top',
      footerMade: 'Built with HTML/CSS/JS · Local: Kubernetes (minikube), online: GitHub Pages',
      counterVisits: 'Visits',
      counterVisitors: 'Visitors',
      ariaBackToTop: 'Back to top',
      brandAria: 'Back to top',
      metaTitle: 'Gleb Moskalev — DevOps Engineer',
      metaDesc: 'DevOps with production experience: zero-downtime releases, CI/CD, containers, monitoring. Open to Junior/Middle. CV (PDF), contact.'
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
      if (el.getAttribute('aria-label')) {
        el.setAttribute('aria-label', value);
      } else {
        if (value !== key) el.textContent = value;
      }
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
