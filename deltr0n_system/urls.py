from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from deltr0n_system import views

#api version
router = routers.DefaultRouter()
router.register(r'productos', views.ProductoView, 'Producto')
router.register(r'clientes', views.ClienteView, 'Cliente')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Deltr0n API"))
]

# genera GET, POST, PUT, DELETE