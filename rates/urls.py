from django.urls import path
from . import views

urlpatterns = [

    # path('testdetail', views.RateTest, name='testdetail'),
    path('detail', views.Rate, name='detail'),
    # path(r'^/detail/submitted/$', views.submitScore,name='submitScore')


]
