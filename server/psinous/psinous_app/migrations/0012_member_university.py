# Generated by Django 5.1.1 on 2024-11-02 11:11

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("psinous_app", "0011_team_year_alter_blog_id_alter_member_id_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="member",
            name="university",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
