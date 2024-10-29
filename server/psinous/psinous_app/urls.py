from django.contrib import admin
from django.urls import path, include
from .views import titles, about

urlpatterns = [
    path('api/link/', titles, name="titles"),
    path('api/about/', about, name='about'),
]