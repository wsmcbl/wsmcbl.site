FROM node:lts-alpine AS build
WORKDIR /src

RUN npm install -g @angular/cli

COPY package*.json ./
RUN npm ci

COPY . ./
RUN ng build --configuration=production && rm -rf node_modules


FROM nginx:stable-alpine AS final
EXPOSE 80

COPY --from=build /src/dist/wsmcbl.site/browser /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf
