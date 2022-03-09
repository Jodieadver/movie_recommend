
from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request,'home.html')

def login(request):
    return render(request,'login.html')

def test(request):
    return render(request,'detail.html')

def signup(request):
    return render(request,'signup.html')

def detail(request):
    return render(request,'detail.html')
