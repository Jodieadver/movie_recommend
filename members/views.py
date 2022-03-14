from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from .models import Rating
from .forms import SignupForm

from django.core import serializers
import json

# Create your views here.


def login_user(request):
    # 直接到与project同级的templates里面进行搜索
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:  # 如果用户存在
            login(request, user)
            return redirect('home')
        else:
            messages.success(request, ("There was an error logging in, try again..."))
            return redirect('login_user')
    else:
        return render(request, 'login_user.html')



def logout_user(request):
    logout(request)
    messages.success(request, ("You were logged out, Come back soooon!"))
    return redirect('home')

def signup(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username = username, password=password)
            login(request,user)
            messages.success(request,("Registration seccuss!"))
            return redirect('home')
    else:
        form = SignupForm()
    return render(request, 'signup.html',{'form':form,})






def mylist(request):
    ratess = serializers.serialize("json", Rating.objects.all())
    rates = json.loads(ratess)
    return render(request, 'mylist.html', {'all_rates': json.dumps(rates)})

    # 传给html
    # movie_list = Rating.objects.all()
    # return render(request, 'mylist.html', {'all_rates': movie_list})
    # 传给js
