from django.contrib import admin
from django.urls import path, include
from .views import titles

urlpatterns = [
    path('api/link/', titles, name="titles"),
]