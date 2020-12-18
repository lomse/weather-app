# Build process
FROM node:alpine as build-deps

WORKDIR /usr/src/app

COPY .env ./

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

# Production environment
FROM nginx:1.19-alpine

# Nginx config
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY configs/nginx.conf /etc/nginx/conf.d/default.conf
COPY configs/gzip.conf /etc/nginx/conf.d

# Static build
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

#Default port exposure
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]