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
    title = models.CharField(max_length=30,blank=True, null=True)
    text= models.TextField()
    image = models.ImageField(upload_to='about/', blank=True, null=True)

    def __str__(self):
        return self.name

class Event(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30,blank=True, null=True)
    description= models.TextField()
    location= models.CharField(max_length=255)
    registration_link= models.URLField(max_length=255)
    event_date= models.DateTimeField()
    is_active = models.BooleanField(default=True)
    image = models.ImageField(upload_to='event/', blank=True, null=True)

    def __str__(self):
        return self.title
    
class Announcement(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30,blank=True, null=True)
    text= models.TextField()
    image = models.ImageField(upload_to='announcement/', blank=True, null=True)

    def __str__(self):
        return self.title
    
    