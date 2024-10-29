from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Link, Sublink
from django.utils.encoding import smart_str

# Create your views here.

@api_view(["GET"])
def titles(request):
    links = Link.objects.filter(is_active=True)
    
    content = {
        "links" : [{
            "link" : link.name,
            "sublink": [sublink.name for sublink in Sublink.objects.filter(is_active=True, link=link)]
        }for link in links]
    }

    return Response(smart_str(content), status=status.HTTP_200_OK, content_type="application/json; charset=utf-8")