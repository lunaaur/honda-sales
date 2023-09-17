# База данных => postgresql, поэтому если соответствующие пакеты не установлены, то можно воспользоваться туториалом: 
https://learn.coderslang.com/ru/0119-setting-up-and-getting-started-with-postgresql/

# В server/.env в поле DATABASE_URL вводим свои данные пользователя (имя, пароль) для создания базы данных.
```DATABASE_URL=postgres://*****:***@localhost:5432/honda```

# В папке server вводим следующие команды:
```
npm i
npx sequelize db:create
npx sequelize db:migrate
```

# Если база данных подключена, в консоли сервера будет "База данных успешно подключена"

В папке client вводим ```npm i```


Запуск папок client и server через ```npm start```