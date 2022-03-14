
from django.urls import path
from . import views

urlpatterns = [
# 怎么在这里面加url不管用，是因为没有在这里面写templates吗
# 找到问题了，我的login页面之前叫做‘login’，与系统的login页面混掉了，这个bug是我通过看页面的报错信息看出来的
# 同时views中找的方法和a href中找的方法不同，这个也混掉了。要在members的views中多找一层（如何templates是在这个文件夹中创建的）
    path('login_user', views.login_user, name='login_user'),
    path('mylist', views.mylist, name='mylist'),
    path('signup',views.signup,name='signup'),
    path('logout_user', views.logout_user, name='logout_user')
]
