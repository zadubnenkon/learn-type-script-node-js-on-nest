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
PORT=7000
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_DB=nest-course
POSTGRESS_PASSWORD=root
POSTGRESS_PORT=5432
```

Для запуска на localhost возможно понадобится убрать параметры ssl из настроек подключения к БД.  
Эти настройки находятся в файле app.module.ts, в объекте, который передаётся в SequelizeModule.forRoot():
```js
{
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRESS_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRESS_PASSWORD,
  database: process.env.POSTGRES_DB,
  models: [User, Role, UserRoles, Post],
  autoLoadModels: true,
  dialectOptions: {// Удаляем это свойство
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}
```

## Запуск приложение
```bash
# product
# localhost:7000
$ npm start
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