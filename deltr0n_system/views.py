from rest_framework import viewsets
from .serializer import SystemSerializer
from .models import Producto
from .models import Cliente

# Create your views here.
class ProductoView(viewsets.ModelViewSet):
    serializer_class = SystemSerializer
    queryset = Producto.objects.all()
class ClienteView(viewsets.ModelViewSet):
    serializer_class = SystemSerializer
    queryset = Cliente.objects.all()