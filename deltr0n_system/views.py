from rest_framework import viewsets
from .serializer import SystemSerializer
from .models import Producto

# Create your views here.
class ProductoView(viewsets.ModelViewSet):
    serializer_class = SystemSerializer
    queryset = Producto.objects.all()