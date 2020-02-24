"""calpoly_rideshare URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path
from rest_framework import routers

from api.views import RideOfferViewSet
from api.views import RideSeekViewSet
from api.views import SearchViewSet
from api.views import FilterViewSet

router = routers.DefaultRouter()
router.register(r'ride_offer', RideOfferViewSet, base_name='ride_offer')
router.register(r'ride_seek', RideSeekViewSet, base_name='ride_seek')
router.register(r'search', SearchViewSet, base_name='search')
router.register(r'filter', FilterViewSet, base_name='filter')

urlpatterns = [
    url(r'^api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
