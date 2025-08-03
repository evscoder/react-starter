FROM node:20-alpine

WORKDIR /var/www
ENV APP_PORT=3000
ENV NODE_ENV=production

# Устанавливаем рабочую директорию
WORKDIR $APP_DIR

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm ci

# Затем копируем весь проект
COPY . .

# Копируем и делаем исполняемым скрипт запуска
COPY ./docker/run.sh /bin/run.sh
RUN chmod +x /bin/run.sh

# Открываем порт
EXPOSE $APP_PORT

# Запускаем
CMD ["sh", "/bin/run.sh"]
