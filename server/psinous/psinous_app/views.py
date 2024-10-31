from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Link, Sublink, About, Event, Announcement, Team, Member, Blog
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

@api_view(["GET"])
def team(request):
    team_infos = Team.objects.all()
    content = {
        "team_infos": [{
            "title": i.title,
            "description": i.description,
            "image": i.image.url if i.image else None
        } for i in team_infos]
    }
    
    return Response(content, status=status.HTTP_200_OK)

@api_view(["GET"])
def member(request):
    members = Member.objects.all()
    content = {
        "members": [{
            "first_name": i.first_name,
            "last_name": i.last_name,
            "team": i.team.title if i.team else None,
            "title": i.title,
            "bio": i.bio,
            "linked_in": i.linkedin if i.linkedin else None,
            "email": i.email if i.email else None,
            "image": i.image.url if i.image else None
        } for i in members]
    }
    
    return Response(content, status=status.HTTP_200_OK)


@api_view(["GET"])
def blog(request):
    blogs = Blog.objects.all()
    content = {
        "blogs" :  [{
            "title": i.title,
            "short_text": i.short_text,
            "text": i.text,
            "writer_f": i.writer.first_name,
            "writer_l": i.writer.last_name,
            "writer_title": i.writer.title,
            "writer_image": i.writer.image.url,
            "created_at": i.created_at,
            "updated_at": i.updated_at,
            "is_published": i.is_published,
            "image": i.image.url if i.image else None
        } for i in blogs]
    }
    return Response(content, status=status.HTTP_200_OK)
