FROM nginx:alpine

# Конфиг: показывать 404.html при отсутствии страницы
COPY nginx-default.conf /etc/nginx/conf.d/default.conf

# Статика (премиум — единственный файл стилей)
COPY index.html /usr/share/nginx/html/index.html
COPY 404.html /usr/share/nginx/html/404.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY app.js /usr/share/nginx/html/app.js
COPY app-premium.js /usr/share/nginx/html/app-premium.js
COPY gsap-premium.js /usr/share/nginx/html/gsap-premium.js
COPY i18n.js /usr/share/nginx/html/i18n.js
COPY cv.pdf /usr/share/nginx/html/cv.pdf

# Фото + SVG иконки
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80
