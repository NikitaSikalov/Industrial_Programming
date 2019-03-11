from django.db import models


class Question(models.Model):
    name = models.CharField(max_length=200)
    text = models.CharField(max_length=200)
    pub_date = models.DateTimeField()
