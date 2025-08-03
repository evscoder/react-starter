#!/bin/sh

cd /app

if [ "$NODE_ENV" = "production" ]; then
  echo "BUILD PRODUCTION"
  npm run build
fi

npm start
