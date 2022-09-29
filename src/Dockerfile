FROM nginxinc/nginx-unprivileged
ENV NGINX_ENVSUBST_OUTPUT_DIR /tmp

COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY randomapp.js /etc/nginx/randomapp.js
COPY index.html /usr/share/nginx/html/deploytest2/index.html
