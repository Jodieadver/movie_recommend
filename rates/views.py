from django.shortcuts import render
# from django.shortcuts import render, redirect
# from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
# from django.contrib.auth.forms import UserCreationForm
from .models import Rating
from .forms import RateForm,RATE_CHOICES





# def RateTest(request):
#     if request.method=="POST":
#         rating = request.POST.get("rating")
#         user = request.POST.get("user")
#         movie_id = request.POST.get("movie_id","")
#         obj = RateForm()
#         obj.user.username = user
#         obj.rating = rating
#         obj.save()
#         obj = Rating.objects.create(
#             user = user,
#             movie_id = movie_id,
#             rating = rating
#             )
#     form = RateForm(movie_id=movie_id)
#     # if form.is_valid():
#     #     form.save()
#     #     return redirect(request,'testdetail.html')
#     else:
#         form = RateForm()
#     return render(request,'testdetail.html',{'form':form,})

# Create your views here.
def Rate(request):
    if request.method == "POST":
        form = RateForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request,("It has a rate now!"))
            return render(request,'detail.html',{'form':form})
    else:
        form = RateForm()
    return render(request,'detail.html',{'form':form,})


def detail(request):
    return render(request,'detail.html')
    # if request.method == "POST":
    #     username = request.POST['username']
    #     movieid = request.POST['movieid']
    #     rating = request.POST['rating']
    #     movietitle = request.POST['movietitle']
    #     form = Rating(user=username, movie_id=movieid, rating=rating, movie_title=movietitle)
    #     # form = Rating(request.POST)
    #     form.save()
    #     messages.success(request,("It has a rate now!"))
    # else:
    #     form = Rating()
    # return render(request,'testdetail.html',{'form':form,})

# def submitScore(request):
#     if request.method == "POST":
#         user = request.POST['user']
#         movie_id = request.POST['movie_id']
#         Rating.object.create(
#         user = user,
#         movie_id = movie_id
#         )
#     return HttpResponse('')
