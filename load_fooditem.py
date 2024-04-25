import os
import django
import json
import sqlite3

# Setting up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'saveplate_backend.settings')
django.setup()

from api.models import FoodItem  

def convert_to_days(value, metric):
    if metric == 'Days':
        return value
    elif metric == 'Weeks':
        return value * 7
    elif metric == 'Months':
        return value * 30  # Assuming 30 days in a month for simplicity
    return 0

def get_max_storage_time(item_data, keywords):
    pairs = []
    for keyword in keywords:
        pair = [0, 0]
        for i, suffix in enumerate(['Min', 'Max']):
            time = item_data.get(f"{keyword}_{suffix}", None)
            metric = item_data.get(f"{keyword}_Metric", None)
            if time is not None and metric is not None:
                day_time = convert_to_days(time, metric)
                pair[i] = day_time
        pairs.append(pair)

    max_pair = [0, 0]
    for pair in pairs:
        if pair[1] > max_pair[1]:
            max_pair = pair
    return (max_pair[0], max_pair[1])

def clear_and_load_data(json_file_path):
    table_name = FoodItem._meta.db_table
    
    # Clear the db first
    conn = sqlite3.connect('saveplate_backend/db.sqlite3')
    cursor = conn.cursor()

    cursor.execute("DELETE FROM " + table_name)
    conn.commit()

    cursor.close()
    conn.close()
    
    print(f"Cleared '{table_name}'")
    
    
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)


    product_sheet = data['sheets'][2]['data'] 
    for item in product_sheet:
        item_data = {list(entry.keys())[0]: list(entry.values())[0] for entry in item}
        
        name = item_data.get('Name', '')
        name_sub = item_data.get('Name_subtitle', '') if item_data.get('Name_subtitle', '') else ''
        new_name = name if not name_sub else name + ' ' + name_sub
        refrigerate_max = get_max_storage_time(item_data, ['Refrigerate', 'DOP_Refrigerate', 'Refrigerate_After_Opening'])
        freeze_max = get_max_storage_time(item_data, ['Freeze', 'DOP_Freeze'])
        pantry_max = get_max_storage_time(item_data, ['Pantry', 'DOP_Pantry', 'Pantry_After_Opening'])

        # Create FoodItem instance
        if refrigerate_max != (0, 0) or freeze_max != (0, 0) or pantry_max != (0, 0):
            FoodItem.objects.create(
                name=new_name,
                pantry_min=pantry_max[0],
                pantry_max=pantry_max[1],
                refrigerate_min = refrigerate_max[0],
                refrigerate_max = refrigerate_max[1],
                freeze_min = freeze_max[0],
                freeze_max = freeze_max[1]
            )
            print(f"Created '{new_name}'")
            
if __name__ == '__main__':
    json_file_path = 'saveplate_backend/data/foodkeeper.json'
    clear_and_load_data(json_file_path)