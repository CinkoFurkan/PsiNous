from django.contrib import admin

from .models import Link, Sublink

class linkAdmin(admin.ModelAdmin):
    list_display = ("name", "is_active")

class sublinkAdmin(admin.ModelAdmin):
    list_display = ("name", "link", "is_active")

admin.site.register(Link, linkAdmin)
admin.site.register(Sublink, sublinkAdmin)