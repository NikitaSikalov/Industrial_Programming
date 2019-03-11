from django.shortcuts import render
from .models import Question
from django.shortcuts import redirect
from django.utils import timezone
import pytz


def index(request):
    question_list = Question.objects.order_by('-pub_date')
    context = {"questions": question_list}
    return render(request, 'questionnarie/index.html', context)


def new_question(request):
    timezone.activate(pytz.timezone('Europe/Moscow'))
    question = Question(
        text=request.POST.get("question-field", ""),
        name=request.POST.get("name-field", ""),
        pub_date=timezone.now()
    )
    question.save()
    return redirect('/')


