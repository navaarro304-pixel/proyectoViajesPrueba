# Dockerfile para servir la web estática con nginx
FROM nginx:alpine

# Copiamos solo los ficheros web al directorio de nginx
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./style.css /usr/share/nginx/html/style.css
COPY ./action.js /usr/share/nginx/html/action.js

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
