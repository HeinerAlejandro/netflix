# Generated by Django 2.2.2 on 2021-05-18 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='date',
            field=models.DateTimeField(auto_now=True, verbose_name='Fecha de publicacion'),
        ),
    ]
