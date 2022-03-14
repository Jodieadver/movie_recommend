from django.shortcuts import render
# from django.shortcuts import render, redirect
# from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
# from django.contrib.auth.forms import UserCreationForm
from .models import Rating
from .forms import RateForm

# Create your views here.
def detail(request):
    if request.method == "POST":
        form = RateForm(request.POST)
        form.save()
        messages.success(request,("It has a rate now!"))
    else:
        form = RateForm()
    return render(request,'detail.html',{'form':form,})
