from rest_framework import serializers

from api.models import RideOffer
from api.models import RideSeek
from api.models import Search
from api.models import Filter

class RideOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = RideOffer
        fields = ('id', 'name_u', 'from_u', 'to_u', 'when_u', 'seats_u', 'cost_u', 'will_drop_u', 'extra_details_u')
        # fields = ('id', 'Name', 'From', 'To', 'When')
        # fields = ('id', 'Title', 'Description')

class RideSeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = RideSeek
        # fields = ('id', 'name_u', 'from_u', 'to_u', 'when_u', 'seats_u', 'cost_u', 'will_drop_u', 'extra_details_u')
        # fields = ('id', 'Name', 'From', 'To', 'When')
        # fields = ('id', 'Title', 'Description')
        fields = ('id', 'name_u', 'from_u', 'to_u', 'when_u', 'extra_details_u')

class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Search
        fields = ('id', 'search_u')

class FilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Filter
        fields = ('id', 'starting_bool_u', 'starting_u', 'ending_bool_u', 'ending_u')