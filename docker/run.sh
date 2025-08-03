#!/bin/sh

cd /var/www

if [ "$NODE_ENV" = "production" ]; then
  echo "BUILD PRODUCTION"
  npm run build
fi

npm start
