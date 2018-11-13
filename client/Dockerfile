FROM nginx:1.13.9
RUN mkdir -p /data/logs
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx-debug", "-g", "daemon off;"]
