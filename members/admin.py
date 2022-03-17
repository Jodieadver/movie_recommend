from django.contrib import admin
from .models import  Rating


# Register your models here.
@admin.register(Rating)
class ratingAdmin(admin.ModelAdmin):
    list_display=('user','movie_id','rating')
