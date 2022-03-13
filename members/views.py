from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .models import Rating
#
from django.core import serializers
import json

# Create your views here.
def login_user(request):
    # 直接到与project同级的templates里面进行搜索
    return render(request, 'login_user.html')

def signup(request):
    return render(request,'signup.html')

def mylist(request):
    ratess = serializers.serialize("json", Rating.objects.all())
    rates = json.loads(ratess)
    return render(request, 'mylist.html', {'all_rates': json.dumps(rates)})


    # 传给html
    # movie_list = Rating.objects.all()
    # return render(request, 'mylist.html', {'all_rates': movie_list})
    # 传给js
