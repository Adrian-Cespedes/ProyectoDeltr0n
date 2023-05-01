from rest_framework import viewsets
from .serializer import ClientSerializer, SystemSerializer

from .models import Producto
from .models import Cliente

# Create your views here.
class ProductoView(viewsets.ModelViewSet):
    serializer_class = SystemSerializer
    queryset = Producto.objects.all()

class ClienteView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Cliente.objects.all()

class ProductoQueryView(viewsets.ModelViewSet):
    serializer_class = SystemSerializer
    def get_queryset(self):
        queryset = Producto.objects.all()

        #Manegar parametros
        name_search = self.request.query_params.get('name', None)
        name_order = self.request.query_params.get('name_order', None)
        price_order = self.request.query_params.get('price_order', None)

        if name_order == "false":
            name_order = False
        elif name_order == "true":
            name_order = True

        
        if price_order == "false":
            price_order = False
        elif price_order == "true":
                price_order = True
            

        #Realizar la consulta
        if name_search is not None:
            queryset = queryset.filter(name__icontains=name_search)
 
        if not name_order:
            queryset = queryset.order_by('-name')
        else:
            queryset = queryset.order_by('name')

        if not price_order:
            queryset = queryset.order_by('-price')
        else:
            queryset = queryset.order_by('price')

        print("EXEC!",price_order, name_order, name_search)

        return queryset