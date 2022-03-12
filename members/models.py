from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Rating(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    movie_id=models.IntegerField(null=True)
    rating=models.IntegerField(null=True)
    movie_title = models.CharField(null=True,max_length=200)

    def __str__(self):
        return self.movie_title
