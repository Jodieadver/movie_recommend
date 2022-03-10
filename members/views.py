from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.
def login_user(request):
    # 直接到同级的templates里面进行搜索
    return render(request, 'login.html')
