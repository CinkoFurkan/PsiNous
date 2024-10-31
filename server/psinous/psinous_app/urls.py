from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from .views import titles, about, event, announcement, team, member

urlpatterns = [
    path('api/link/', titles, name="titles"),
    path('api/about/', about, name='about'),
    path('api/event/', event, name='event'),
    path('api/announcement/', announcement, name='announcement'),
    path('api/team/', team, name="team"),
    path('api/member/', member, name="member")
]    

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
