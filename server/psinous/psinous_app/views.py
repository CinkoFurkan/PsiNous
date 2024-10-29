from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Link, Sublink, About

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
            "image": i.image.url if i.image else None
        } for i in about]
    }
    
    return Response(content, status=status.HTTP_200_OK)  
