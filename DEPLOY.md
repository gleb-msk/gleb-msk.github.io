# Чеклист перед публикацией сайта

Когда появится домен, добавьте в **index.html**:
- тег `<link rel="canonical" href="https://ваш-домен.ru/">`;
- мета `og:url`, `og:image` (полный URL картинки для соцсетей), при желании `twitter:image`;
- в JSON-LD свойство `"url": "https://ваш-домен.ru/"`.
Создайте **sitemap.xml** с вашим URL и при необходимости обновите **manifest.json** (`start_url`).

## Картинка для соцсетей (когда будет домен)

- Добавьте файл **og-image.jpg** в корень (рекомендуемый размер **1200×630** px) и укажите полный URL в мета `og:image` и в `twitter:image`.

## Иконки (по желанию)

- **favicon.ico**, **favicon.svg**, **apple-touch-icon.png** — уже подключены в HTML; добавьте файлы в корень.
- Для PWA «Установить»: **icon-192.png** (192×192) и **icon-512.png** (512×512) в корень.  
  Можно сгенерировать, например на [realfavicongenerator.net](https://realfavicongenerator.net/) или [maskable.app](https://maskable.app/).

## Аналитика

- В **index.html** перед `</body>` есть комментарий «Аналитика». Вставьте туда код счётчика (Яндекс.Метрика или Google Analytics).

## 404 страница

- Если хостинг позволяет указать свою страницу ошибки, укажите **404.html**.  
  (На GitHub Pages, Netlify, Vercel и т.п. обычно подхватывается автоматически.)

---

# Как развернуть на хостинге

Сайт — статический (HTML, CSS, JS). Развернуть можно несколькими способами.

## 1. Обычный статический хостинг (FTP, панель хостинга)

Загрузите в корень сайта все файлы проекта.

**Основная версия (премиум — единственная):**
- `index.html`, `styles.css` (единственный файл стилей), `app.js`, `app-premium.js`, `gsap-premium.js`
- папка `assets/` (фото, иконки, логотипы)
- `cv.pdf`, `favicon.ico`, `favicon.svg`, `manifest.json` (если есть)
- В HTML подключён CDN для GSAP (или положите скрипты локально).

Файл `index-premium.html` — копия главной для обратной совместимости ссылок; подключает тот же `styles.css`.

## 2. GitHub Pages (пошагово)

Репозиторий уже инициализирован, первый коммит сделан. Осталось:

1. **Создать репозиторий на GitHub**  
   [github.com/new](https://github.com/new) — имя любое (например `portfolio`). Не добавляйте README, .gitignore или лицензию (всё уже есть локально).

2. **Привязать удалённый репозиторий и отправить код** (подставьте свой логин и имя репо):
   ```bash
   cd "/Users/dianaursu/cursor projects/kubernetes/portfolio-k8s"
   git remote add origin https://github.com/ВАШ_ЛОГИН/ИМЯ_РЕПО.git
   git push -u origin main
   ```

3. **Включить GitHub Pages**  
   В репозитории: **Settings** → слева **Pages** → в блоке **Build and deployment**:  
   - **Source:** Deploy from a branch  
   - **Branch:** `main` → папка **/ (root)** → **Save**.

Через 1–2 минуты сайт будет доступен по адресу:  
`https://ВАШ_ЛОГИН.github.io/ИМЯ_РЕПО/`  
(если репо называется `portfolio` и логин `gleb` — то `https://gleb.github.io/portfolio/`).

Чтобы сайт открывался по корню `https://ВАШ_ЛОГИН.github.io/`, создайте репозиторий с именем **`ВАШ_ЛОГИН.github.io`** (например `gleb.github.io`) и деплойте в него — тогда главная будет по этому URL.

---

## Другие варианты: Netlify / Vercel

- **Netlify:** перетащите папку проекта в [app.netlify.com](https://app.netlify.com) → Deploy, или подключите Git-репозиторий — деплой по push.
- **Vercel:** [vercel.com](https://vercel.com) → Import Project → укажите папку с проектом или репозиторий. Корень — папка с `index.html`.

Главная страница — `index.html` (премиум). Страница `index-premium.html` дублирует её для старых ссылок.

## 3. Docker

В проекте есть **Dockerfile**: образ на nginx отдаёт статику (премиум — основная версия).

**Сборка образа:**
```bash
docker build -t portfolio:1.2 .
```

В образ копируются: `index.html`, `styles.css`, `app.js`, `app-premium.js`, `gsap-premium.js`, `cv.pdf`, `assets/`.

**Запуск контейнера:**
```bash
docker run -d -p 8080:80 --name portfolio portfolio:1.2
```
Сайт доступен по адресу http://localhost:8080 (главная — `/` или `/index.html`).

## 4. Kubernetes (minikube или кластер)

В папке **k8s/** лежат манифесты: namespace, Deployment, Service, Ingress.

**Быстрый старт (minikube):**

1. Запустите minikube и включите Ingress:
   ```bash
   minikube start
   minikube addons enable ingress
   ```

2. Соберите образ в среде minikube и создайте ресурсы:
   ```bash
   eval $(minikube docker-env)
   docker build -t portfolio:1.2 .
   kubectl apply -f k8s/
   ```

3. Проверьте поды и Ingress:
   ```bash
   kubectl -n gleb-portfolio get pods
   kubectl -n gleb-portfolio get ingress
   ```

4. Откройте сайт (для примера в Ingress указан хост `gleb.local`):
   ```bash
   minikube tunnel
   ```
   И добавьте в `/etc/hosts` (или аналог): `127.0.0.1 gleb.local`. Либо смотрите IP из `kubectl -n gleb-portfolio get ingress` и откройте по IP с заголовком `Host: gleb.local`, или поменяйте в **k8s/30-ingress.yaml** хост на нужный.

**В продакшене** (реальный кластер): соберите образ в registry (Docker Hub, GitHub Container Registry и т.д.), в **k8s/10-deploy.yaml** укажите `image: ваш-registry/portfolio:тег` и `imagePullPolicy: Always`, настройте Ingress с TLS и своим доменом.
