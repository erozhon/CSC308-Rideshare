from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from api.models import RideOffer
from api.models import RideSeek
from api.models import Search
from api.models import Filter
from api.serializers import RideOfferSerializer
from api.serializers import RideSeekSerializer
from api.serializers import SearchSerializer
from api.serializers import FilterSerializer
from django_filters import rest_framework as filters

# Create your views here.

class RideOfferFilter(filters.FilterSet):
    class Meta:
        model = RideOffer
        fields = {
            'from_u' : ['icontains'],
            'to_u' : ['icontains'],
            'when_u' : ['lte', 'gte'],
            'cost_u' : ['lte'],
        }

class RideOfferViewSet(viewsets.ModelViewSet):
    queryset = RideOffer.objects.all()
    serializer_class = RideOfferSerializer
    filterset_class = RideOfferFilter
    #def list(self, request):   inherets this from modelviewset

class RideSeekFilter(filters.FilterSet):
    class Meta:
        model = RideSeek
        fields = {
            'from_u' : ['icontains'],
            'to_u' : ['icontains'],
            'when_u' : ['lte', 'gte'],
        }

class RideSeekViewSet(viewsets.ModelViewSet):
    queryset = RideSeek.objects.all()
    serializer_class = RideSeekSerializer
    filterset_class = RideSeekFilter

class SearchViewSet(viewsets.ModelViewSet):
    queryset = Search.objects.all()
    serializer_class = SearchSerializer

class FilterViewSet(viewsets.ModelViewSet):
    queryset = Filter.objects.all()
    serializer_class = FilterSerializer