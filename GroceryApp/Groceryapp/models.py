from django.db import models

# Create your models here.
class User(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    passw = models.CharField(max_length=300)
    ques = models.CharField(default="What's your favorite food?",editable=False,max_length=200)
    ans = models.CharField(max_length=30)

    def __str__(self):
        return self.fname+ ' ' + self.lname
    
