FROM node:20-alpine

# Устанавливаем переменные окружения
ENV NODE_ENV=production
ENV APP_PORT=4200

WORKDIR /app

# Копируем зависимости
COPY package*.json ./
RUN npm ci

# Копируем всё остальное
COPY . .

# Копируем и делаем исполняемым скрипт запуска
COPY ./docker/run.sh /bin/run.sh
RUN chmod +x /bin/run.sh

# Открываем порт
EXPOSE $APP_PORT

# Запускаем
CMD ["sh", "/bin/run.sh"]
