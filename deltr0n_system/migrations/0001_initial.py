# Generated by Django 4.2 on 2023-04-30 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('price', models.PositiveIntegerField(default=0)),
                ('description', models.TextField(blank=True)),
                ('stock', models.PositiveIntegerField(default=0)),
            ],
        ),
    ]
