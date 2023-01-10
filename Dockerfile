# Non-prod as builder
FROM node:18.13.0 as build-stage
WORKDIR /app
COPY package*.json ./
COPY package-lock.json ./
RUN npm ci
COPY . .
# Build the project
RUN npm run build

# Prod
FROM nginx:1.19 as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]