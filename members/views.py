from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .models import Rating
import json

# Create your views here.
def login_user(request):
    # 直接到同级的templates里面进行搜索
    return render(request, 'login.html')


def mylist(request):
    movie_list = Rating.objects.all()
    # 传给html
    # return render(request, 'mylist.html', {'all_rates': movie_list})
    # 传给js
    return render(request, 'mylist.html', {'all_rates': json.dumps(movie_list)})
