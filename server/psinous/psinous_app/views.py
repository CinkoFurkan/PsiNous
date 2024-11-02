from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Link, Sublink, About, Event, Announcement, Team, Member, Blog
from django.utils import timezone

# API views
#ibo was here

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
            "member_id": i.id,
            "first_name": i.first_name,
            "last_name": i.last_name,
            "team": i.team.title if i.team else None,
            "team_id": i.team.id if i.team else None,
            "title": i.team.title,
            "title_member": i.title,
            "university": i.university,
            "bio": i.bio,
            "linked_in": i.linkedin if i.linkedin else None,
            "email": i.email if i.email else None,
            "image": i.image.url if i.image else None
        } for i in members]
    }
    
    return Response(content, status=status.HTTP_200_OK)

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Member

@api_view(["GET"])
def member_info(request, id=None):
    if id:
        # Fetch a single member by ID
        try:
            member = Member.objects.get(id=id)
            content = {
                "member": {
                    "member_id": member.id,
                    "first_name": member.first_name,
                    "last_name": member.last_name,
                    "team": member.team.title if member.team else None,
                    "team_id": member.team.id if member.team else None,
                    "title": member.team.title if member.team else None,
                    "title_member": member.title,
                    "university": member.university,
                    "bio": member.bio,
                    "linked_in": member.linkedin if member.linkedin else None,
                    "email": member.email if member.email else None,
                    "image": member.image.url if member.image else None
                }
            }
            return Response(content, status=status.HTTP_200_OK)
        except Member.DoesNotExist:
            return Response({"error": "Member not found"}, status=status.HTTP_404_NOT_FOUND)
    else:
        # Fetch all members
        members = Member.objects.all()
        content = {
            "members": [{
                "member_id": i.id,
                "first_name": i.first_name,
                "last_name": i.last_name,
                "team": i.team.title if i.team else None,
                "team_id": i.team.id if i.team else None,
                "title": i.team.title if i.team else None,
                "title_member": i.title,
                "university": i.university,
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
