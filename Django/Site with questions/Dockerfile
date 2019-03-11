FROM python:3.6-alpine

WORKDIR /app
COPY requirements.txt ./
COPY manage.py ./
COPY questionnarie ./questionnarie
RUN pip install -r requirements.txt
COPY run.sh ./

CMD ["sh", "run.sh"]
