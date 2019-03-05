# Industrial_Programming

### Задание 1 (RabbitMQ + Docker)
1. Написать программу которая генерит рандомные числа с рандомным интервалом и отправляет их в RabbitMQ (Producer)
2. Написать программу которая прининимает сообщения из RabbitMQ и выводит из на экран (Consumer)
3. Сделать docker-compose файл, в котором будут прописаны оба сервиса + RabbitMQ
<br>
**Запуск:** 
```
$ docker-compose build
$ docker-compose up
```
Нужно немного подождать пока настроиться <i>RabbitMQ</i> и запустятся сами <i>producer</i> и <i>consumer</i>.