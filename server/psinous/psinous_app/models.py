from django.db import models

class Link(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Sublink(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    link = models.ForeignKey(Link, on_delete=models.CASCADE, related_name='sublinks')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class About(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    text= models.TextField()

    def __str__(self):
        return self.name
    
