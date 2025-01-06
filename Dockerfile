FROM alpine:3.8

RUN echo http://mirrors.ustc.edu.cn/alpine/v3.8/main > /etc/apk/repositories && \
    echo http://mirrors.ustc.edu.cn/alpine/v3.8/community >> /etc/apk/repositories

RUN apk update && apk upgrade

RUN apk add nginx

RUN mkdir /run/nginx

COPY docker/default.conf /etc/nginx/conf.d

COPY build/ /var/www/

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]



