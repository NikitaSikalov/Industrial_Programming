#!/bin/bash

python3 manage.py makemigrations questionnarie
echo "comand 1 done"
python3 manage.py migrate
echo "comand 2 done"
python3 manage.py runserver 0.0.0.0:8000
echo "comand 3 done"