# Node.js application. NestJS, PostgreSQL

## Описание
Данное приложение было создано в процессе просмотра видоурока "Продвинутый BACKEND на Node.js. Nest js ПОЛНЫЙ КУРС & Docker".
- [Ссылка на канал](https://www.youtube.com/channel/UCDzGdB9TTgFm8jRXn1tBdoA)
- [Ссылка на видеурок](https://www.youtube.com/watch?v=dDeWWQWMM-Y)

## Подготовка к запуску
Устанавливаем все необходимые модули node.js:
```bash
$ npm install
```

Для работы приложения на устройстве должна быть БД PostgreSQL с созданной таблицей **nest-course** под пользователем **postgres** и паролем **root**.  
Можно использовать свои значения, но нужно будет изменить POSTGRES_* поля в .env файлах:
```
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_DB=nest-course
POSTGRESS_PASSWORD=root
POSTGRESS_PORT=5432
```

## Запуск приложение
```bash
# product
# localhost:7000
$ npm start

# watch mode
# localhost:5000
$ npm run start:dev
```

Описание методов с примерами работы находится в документации SwaggerUi, которая доступна по пути */api/docs*.

## Docker Composer
Также есть возможность развернуть приложение с помощью Docker Composer.  

Для успешного запуска необходимо:
- установить Docker на устройство;
- установить модули node.js;
- заменить ```POSTGRES_HOST=localhost``` на ```POSTGRES_HOST=postgres``` в .env файлах;
- указать свой пароль базы данных в поле ```POSTGRES_PASSWORD``` в docker-compose.yml;
- указать свою версию node в первой строке файла Dockerfile.

```bash
# собираем образ
$ docker-compose buld

# Разворачиваем
$ docker-compose up
```

После успешного запуска БД будет доступна через порт 5433.