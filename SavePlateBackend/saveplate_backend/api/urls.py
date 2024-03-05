from django.urls import path
from . import views

urlpatterns = [
    path('food-type/', views.food_type, name='food_type'),
    path('shelf-life/<str:food_name>/', views.get_shelf_life, name='get_shelf_life'),
    path('shelf-life-from-img/', views.get_shelf_life_from_img, name='get_shelf_life_from_img'),
    path('add-user-stored-item/', views.add_user_stored_item, name='add_user_stored_item'),
]
