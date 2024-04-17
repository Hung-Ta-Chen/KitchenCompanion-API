from django.contrib import admin
from .models import FoodItem, UserStoredItem

# Register your models here.
admin.site.register(FoodItem)
admin.site.register(UserStoredItem)