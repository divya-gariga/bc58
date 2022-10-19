# FROM node:alpine AS builder
# ENV NODE_ENV production
# WORKDIR /app
# COPY ./package.json ./
# RUN npm install --force

# # Copying all the files in our project
# COPY . .

# # Building our application
# RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
# COPY --from=builder /app/dist /usr/share/nginx/html
COPY dist /usr/share/nginx/html
# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf


