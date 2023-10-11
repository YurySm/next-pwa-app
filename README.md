# next-pwa-app

Страртовое PWA приложение на Next с авторизацией, интернациональностью и темами

## Использовано:

- [next-pwa](https://www.npmjs.com/package/next-pwa) - для преобразования в PWA
- [next-themes](https://www.npmjs.com/package/next-themes) - для создания светлой и темной темы
- [next-intl](https://next-intl-docs.vercel.app/docs/getting-started) - для интернационализации (i18n)
- [react-hook-form](https://www.react-hook-form.com/) - валидация форм
- [redux toolkit](https://redux-toolkit.js.org/) - Redux для создания стора
- [redux-persist](https://www.npmjs.com/package/redux-persist) - сохрание стора в LocalStorage

## Hot reloading в Next.js приложении с использованием Docker
нужно добавить меппинг /app/.next
1. 
```
# docker-compose.yml

version: "3"

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: web
    restart: always
    volumes:
      - ./:/app
      - /app/node_modules
      - /app/.next
    ports:
      - 3000:3000
```
2. Доавить дополнительный опрос в next.config.js
```
module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  ...
}
```
