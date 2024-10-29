from django.contrib import admin

from .models import Link, Sublink, About

class linkAdmin(admin.ModelAdmin):
    list_display = ("name", "is_active")

class sublinkAdmin(admin.ModelAdmin):
    list_display = ("name", "link", "is_active")

class aboutAdmin(admin.ModelAdmin):
    list_display = ("name", "text")

admin.site.register(Link, linkAdmin)
admin.site.register(Sublink, sublinkAdmin)
admin.site.register(About, aboutAdmin)