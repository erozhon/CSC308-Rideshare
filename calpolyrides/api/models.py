from django.db import models

# Create your models here.

class RideOffer(models.Model):
    # title = models.CharField(max_length=100, default=0)
    # description = models.CharField(max_length=100, default=0)
    name_u = models.CharField(max_length=100, verbose_name="Name")
    from_u = models.CharField(max_length=100, verbose_name="From")
    to_u = models.CharField(max_length=100, verbose_name="To")
    when_u = models.DateTimeField(verbose_name="When")
    seats_u = models.IntegerField(verbose_name="Seats")
    cost_u = models.DecimalField(max_digits=6, verbose_name="Cost", decimal_places=2)
    will_drop_u = models.BooleanField(verbose_name="Willing to drop along the way")
    extra_details_u = models.TextField(max_length=500, verbose_name="Extra Details", blank=True)

class RideSeek(models.Model):
    name_u = models.CharField(max_length=100, verbose_name="Name")
    from_u = models.CharField(max_length=100, verbose_name="From")
    to_u = models.CharField(max_length=100, verbose_name="To")
    when_u = models.DateTimeField(verbose_name="When")
    extra_details_u = models.TextField(max_length=500, verbose_name="Extra Details", blank=True)

class Search(models.Model):
    search_u = models.CharField(max_length=100, verbose_name="Search")

class Filter(models.Model):
    starting_bool_u = models.BooleanField(verbose_name="Filter for starting location")
    starting_u = models.CharField(max_length=100, verbose_name="Starting Location", blank=True)
    ending_bool_u = models.BooleanField(verbose_name="Filter for ending location")
    ending_u = models.CharField(max_length=100, verbose_name="Ending_Location", blank=True)



