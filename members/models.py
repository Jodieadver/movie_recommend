from django.db import models
from django.contrib.auth.models import User

# Create your models here.
RATE_CHOICES = [
(None,'Rate it'),
(1, '1 - Trash'),
(2, '2 - Horrible'),
(3, '3 - Terrible'),
(4, '4 - Bad'),
(5, '5 - OK'),
(6, '6 - Watchable'),
(7, '7 - Good'),
(8, '8 - Pretty Good'),
(9, '9 - Perfect'),
(10, '10 - Masterpiece'),
]

class Rating(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    movie_id=models.IntegerField(null=True)
    rating=models.PositiveSmallIntegerField(choices=RATE_CHOICES,default=None)


    def __str__(self):
        return self.user.username
