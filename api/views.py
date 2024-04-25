from django.shortcuts import render
from django.http import JsonResponse
from clarifai.client.model import Model
import os
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from decouple import config
from .models import FoodItem, UserStoredItem
from django.forms.models import model_to_dict
from django.conf import settings
from datetime import date
import json

# Get the Clarifai PAT from the environment variables
CLARIFAI_PAT = config('CLARIFAI_PAT')
os.environ['CLARIFAI_PAT'] = CLARIFAI_PAT

# Prediction model
model = Model("https://clarifai.com/clarifai/main/models/food-item-recognition")

# Function for loading the food mapping
def load_food_mappings():
    file_path = os.path.join(settings.BASE_DIR, 'api', 'data', 'food_mappings.json')
    with open(file_path, 'r') as file:
        return json.load(file)

food_mappings = load_food_mappings()


# Create your views here.
# request handler
@csrf_exempt
def food_type(request):    
    if request.method == 'POST' and request.FILES['image']:
        # get the image from the request
        image = request.FILES['image']
        # Save the image temporarily
        img_name = default_storage.save(image.name, image)
        img_path = default_storage.path(img_name)

        # Predict using the file path
        response = model.predict_by_filepath(filepath=img_path, input_type="image")

        # Clean up the saved file
        default_storage.delete(img_path)

        if response.status.code == 10000:
            food_items = [{'name': concept.name, 'value': concept.value} 
                          for concept in response.outputs[0].data.concepts]
            max_value, max_type = 0, ''
            for item in food_items:
                if item['value'] > max_value:
                    max_value = item['value']
                    max_type = item['name']

            return JsonResponse({'food_type': max_type, 'prob': max_value})
        else:
            return JsonResponse({'error': 'Failed to process the image'}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request'}, status=400)
    

def get_shelf_life(request, food_name):
    mapped_name = food_mappings.get(food_name, '')
    try:
        food_item = FoodItem.objects.get(name=mapped_name)

        storage_methods = []
        if food_item.pantry_min != 0 or food_item.pantry_max != 0:
            storage_methods.append(
                {'name': 'Pantry', 'min': food_item.pantry_min, 'max': food_item.pantry_max}
            )
        if food_item.refrigerate_min != 0 or food_item.refrigerate_max != 0:
            storage_methods.append(
                {'name': 'Refrigerate', 'min': food_item.refrigerate_min, 'max': food_item.refrigerate_max}
            )
        if food_item.freeze_min != 0 or food_item.freeze_max != 0:
            storage_methods.append(
                {'name': 'Freeze', 'min': food_item.freeze_min, 'max': food_item.freeze_max}
            )
        return JsonResponse({'name': food_name, 'storage_methods': storage_methods})

    except FoodItem.DoesNotExist:
        return JsonResponse({'error': 'Food item not found'}, status=404)


@csrf_exempt 
def get_shelf_life_from_img(request):   
    if request.method == 'POST' and request.FILES['image']:
        # get the image from the request
        image = request.FILES['image']
        # Save the image temporarily
        img_name = default_storage.save(image.name, image)
        img_path = default_storage.path(img_name)

        # Predict using the file path
        response = model.predict_by_filepath(filepath=img_path, input_type="image")

        # Clean up the saved file
        default_storage.delete(img_path)

        if response.status.code == 10000:
            food_items = [{'name': concept.name, 'value': concept.value} 
                          for concept in response.outputs[0].data.concepts]
            max_value, max_type = 0, ''
            for item in food_items:
                if item['value'] > max_value:
                    max_value = item['value']
                    max_type = item['name']
            
            mapped_name = food_mappings.get(max_type, '')
            try:
                food_item = FoodItem.objects.get(name=mapped_name)

                storage_methods = []
                if food_item.pantry_min != 0 or food_item.pantry_max != 0:
                    storage_methods.append(
                        {'name': 'Pantry', 'min': food_item.pantry_min, 'max': food_item.pantry_max}
                    )
                if food_item.refrigerate_min != 0 or food_item.refrigerate_max != 0:
                    storage_methods.append(
                        {'name': 'Refrigerate', 'min': food_item.refrigerate_min, 'max': food_item.refrigerate_max}
                    )
                if food_item.freeze_min != 0 or food_item.freeze_max != 0:
                    storage_methods.append(
                        {'name': 'Freeze', 'min': food_item.freeze_min, 'max': food_item.freeze_max}
                    )
                return JsonResponse({'food_type': max_type, 'prob': max_value, 'storage_methods': storage_methods})

            except FoodItem.DoesNotExist:
                return JsonResponse({'error': 'Food item not found'}, status=404)
        else:
            return JsonResponse({'error': 'Failed to process the image'}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request'}, status=400)
    

def add_user_stored_item(request):
    if request.method == 'POST':
        user = request.user
        name = request.data.get('name')
        purchase_date = request.data.get('purchase_date', date.today())
        shelf_life_min = request.data.get('shelf_life_min')
        shelf_life_max = request.data.get('shelf_life_max')
        storage_method = request.data.get('storage_method', UserStoredItem.REFRIGERATE)

        # Basic validation
        if not name or not shelf_life_min or not shelf_life_max:
            return JsonResponse({'error': 'Missing data field'}, status=400)

        # Create and save the new user stored item
        user_stored_item = UserStoredItem.objects.create(
            user=user,
            name=name,
            purchase_date=purchase_date,
            shelf_life_min=shelf_life_min,
            shelf_life_max=shelf_life_max,
            storage_method=storage_method
        )

        data = {
            'id': user_stored_item.id,
            'name': user_stored_item.name,
            'purchase_date': user_stored_item.purchase_date,
            'shelf_life_min': user_stored_item.shelf_life_min,
            'shelf_life_max': user_stored_item.shelf_life_max,
            'storage_method': user_stored_item.storage_method
        }

        return JsonResponse(data, status=201)
    else:
        return JsonResponse({'error': 'Invalid request'}, status=400)