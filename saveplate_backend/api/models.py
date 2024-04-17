from django.db import models
from django.conf import settings
from datetime import date

# Create your models here.
class FoodItem(models.Model):
    name = models.CharField(max_length=255)
    pantry_min = models.IntegerField(null=True, blank=True)
    pantry_max = models.IntegerField(null=True, blank=True)
    refrigerate_min = models.IntegerField(null=True, blank=True)
    refrigerate_max = models.IntegerField(null=True, blank=True)
    freeze_min = models.IntegerField(null=True, blank=True)
    freeze_max = models.IntegerField(null=True, blank=True)
    
    def __str__(self):
        return self.name
    
class UserStoredItem(models.Model):
    REFRIGERATE = 'refrigerate'
    FREEZE = 'freeze'
    PANTRY = 'pantry'
    STORAGE_METHOD_CHOICES = [
        (REFRIGERATE, 'Refrigerate'),
        (FREEZE, 'Freeze'),
        (PANTRY, 'Pantry'),
    ]
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    purchase_date = models.DateField(default=date.today)
    shelf_life_min = models.IntegerField(null=True, blank=True)
    shelf_life_max = models.IntegerField(null=True, blank=True)
    storage_method = models.CharField(max_length=20, choices=STORAGE_METHOD_CHOICES, default=REFRIGERATE)
    
    def __str__(self):
        return f"{self.name}"
