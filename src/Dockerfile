FROM nginxinc/nginx-unprivileged
ENV NGINX_ENVSUBST_OUTPUT_DIR /tmp

USER root
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY start-nginx.sh /usr/sbin/start-nginx
RUN chmod +x /usr/sbin/start-nginx
COPY randomapp.js /etc/nginx/randomapp.js
COPY index.html /usr/share/nginx/html/deploytest2/index.html
USER nginx

CMD ["start-nginx"]