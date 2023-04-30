from rest_framework import serializers
from .models import Producto

class SystemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        # fields = ('id', 'name', 'price', 'description', 'stock')
        fields = '__all__'