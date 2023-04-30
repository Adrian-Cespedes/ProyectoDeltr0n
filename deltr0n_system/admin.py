from django.contrib import admin
from .models import Producto
from .models import Cliente
# Register your models here.
admin.site.register(Producto)
admin.site.register(Cliente)