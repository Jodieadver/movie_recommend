
from django.urls import path
from . import views

urlpatterns = [
# 怎么在这里面加url不管用，是因为没有在这里面写templates吗
# 找到问题了，在a标签的href处，它不会自己往文件夹中找，所以要多写入一层
    path('login', views.login_user, name='login'),
    path('mylist', views.mylist, name='mylist'),
]
