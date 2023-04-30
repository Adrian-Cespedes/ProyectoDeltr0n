from rest_framework import serializers
from .models import Producto
from .models import Cliente

class SystemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        # fields = ('id', 'name', 'price', 'description', 'stock')
        fields = '__all__'
    class Meta:
        model = Cliente
        # fields = ('DNI', 'RUC', 'name', 'lastname', 'phone', 'email', 'password')
        fields = '__all__'