FROM node:14-alpine as BUILD_IMAGE

WORKDIR /usr/eharbour-ui

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:staging

FROM nginx:1.18.0-alpine
RUN ls
RUN ls ./etc/nginx
RUN rm -rf /usr/share/nginx/html/*

COPY --from=BUILD_IMAGE /usr/eharbour-ui/dist/eharbour /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
