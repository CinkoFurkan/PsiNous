from django.contrib import admin

from .models import Link, Sublink, About, Event, Announcement

class linkAdmin(admin.ModelAdmin):
    list_display = ("name", "is_active", "position")

class sublinkAdmin(admin.ModelAdmin):
    list_display = ("name", "link", "is_active", "position")

class aboutAdmin(admin.ModelAdmin):
    list_display = ("name", "text")

class eventAdmin(admin.ModelAdmin):
    list_display = ("title", "event_date", 'is_active')

class announcementAdmin(admin.ModelAdmin):
    list_display = ("title", 'text')

admin.site.register(Link, linkAdmin)
admin.site.register(Sublink, sublinkAdmin)
admin.site.register(About, aboutAdmin)
admin.site.register(Event, eventAdmin)
admin.site.register(Announcement, announcementAdmin)