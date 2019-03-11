# Industrial_Programming

## Задание 1 (RabbitMQ + Docker)
1. Написать программу которая генерит рандомные числа с рандомным интервалом и отправляет их в RabbitMQ (Producer)
2. Написать программу которая прининимает сообщения из RabbitMQ и выводит из на экран (Consumer)
3. Сделать docker-compose файл, в котором будут прописаны оба сервиса + RabbitMQ  

### Запуск:   
```
$ docker-compose build
$ docker-compose up
```  
Нужно немного подождать пока настроиться <i>RabbitMQ</i> и запустятся сами <i>producer</i> и <i>consumer</i>.

---
## Задание 2 (Django)
Написать сайт опросник, на котором можно задавать вопросы. 
### Запуск:
_Вариант 1_: Запустить через Docker

_Вариант 2_ : Запуск через Django
```
    $ python manage.py makemigrations questionnarie
    $ python manage.py migrate
    $ python manage.py runserver 
```