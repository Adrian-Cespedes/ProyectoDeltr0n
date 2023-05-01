from rest_framework import viewsets
from .serializer import SystemSerializer, ClientSerializer
from .models import Producto
from .models import Cliente

# Create your views here.
class ProductoView(viewsets.ModelViewSet):
    serializer_class = SystemSerializer
    queryset = Producto.objects.all()
class ClienteView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Cliente.objects.all()