from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Link, Sublink, About, Event, Announcement
from django.utils import timezone

# API views

@api_view(["GET"])
def titles(request):
    links = Link.objects.filter(is_active=True)
    
    content = [{
            "link": link.name,
            "sublink": [sublink.name for sublink in Sublink.objects.filter(is_active=True, link=link)]
        } for link in links]
    
    return Response(content, status=status.HTTP_200_OK) 

@api_view(["GET"])
def about(request):
    about = About.objects.all()
    content = {
        "about": [{
            "text": i.text,
            "title": i.title,
            "image": i.image.url if i.image else None
        } for i in about]
    }
    
    return Response(content, status=status.HTTP_200_OK) 

@api_view(["GET"])
def event(request):
    event = Event.objects.all()
    content = {
        "event": [{
            "title": i.title,
            "description": i.description,
            "location" : i.location,
            "registration_link": i.registration_link,
            "event_date" : timezone.localtime(i.event_date),
            "is_active" : i.is_active,
            "image": i.image.url if i.image else None
        } for i in event]
    }
    
    return Response(content, status=status.HTTP_200_OK)   

@api_view(["GET"])
def announcement(request):
    announcement = Announcement.objects.all()
    content = {
        "announcement": [{
            "title": i.title,
            "text": i.text,
            "image": i.image.url if i.image else None
        } for i in announcement]
    }
    
    return Response(content, status=status.HTTP_200_OK)  

