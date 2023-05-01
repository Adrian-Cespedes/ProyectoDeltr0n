from django.db import models

# Create your models here.
class Producto(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255, default="")
    price = models.PositiveIntegerField(default=0) 
    description = models.TextField(blank=True)
    stock = models.PositiveIntegerField(default=0)
    creationDate = models.DateTimeField(auto_now_add=True)
    image = models.CharField(max_length=255, default="noimage.png")

    def __str__(self):
        return self.name

class Cliente(models.Model):
    DNI = models.CharField(max_length=8, primary_key=True)
    RUC = models.CharField(max_length=11, blank=True)
    name = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    phone = models.CharField(max_length=9)
    email = models.EmailField(blank=True)
    password = models.CharField(max_length=255)
    def __str__(self):
        return self.DNI

