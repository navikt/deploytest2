FROM nginxinc/nginx-unprivileged
ENV NGINX_ENVSUBST_OUTPUT_DIR /tmp

COPY default.conf /etc/nginx/conf.d/default.conf
COPY src /usr/share/nginx/html/deploytest2