FROM nginx:alpine

# Статика (премиум — единственный файл стилей)
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY app.js /usr/share/nginx/html/app.js
COPY app-premium.js /usr/share/nginx/html/app-premium.js
COPY gsap-premium.js /usr/share/nginx/html/gsap-premium.js
COPY cv.pdf /usr/share/nginx/html/cv.pdf

# ✅ Фото + SVG иконки
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80
