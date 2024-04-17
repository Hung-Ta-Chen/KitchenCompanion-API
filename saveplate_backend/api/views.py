from django.shortcuts import render
from django.http import JsonResponse
from clarifai.client.model import Model
import os
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from decouple import config
from .models import FoodItem, UserStoredItem
from django.forms.models import model_to_dict
from datetime import date

food_mapping = {
    "acorn squash": "Squash winter",
    "almond": "Almonds no shell",
    "amaranth": "Amaranth whole grain",
    "anchovy": "Anchovies canned",
    "antipasto": "Antipasto",
    "apple": "Apples",
    "apple pie": "Fruit pies apple, peach, blueberry, apricot, cherry, blackberry",
    "apple sauce": "Applesauce commercial",
    "apricot": "Apricots",
    "artichoke": "Artichokes, whole",
    "arugula": "Arugula",
    "asparagus": "Asparagus",
    "aspic": "Aspic",
    "avocado": "Avocados",
    "baby back ribs": "Pork ribs",
    "bacon": "Bacon",
    "bagel": "Bagel fresh baked",
    "baguette": "French bread",
    "baked alaska": "Baked Alaska",
    "baklava": "Baklava",
    "bamboo shoots": "Bamboo shoots",
    "banana": "Bananas",
    "barley": "Barley whole grain",
    "basil": "Basil fresh",
    "bass": "Lean fish cod, flounder, haddock, halibut, sole, etc.",
    "bay leaf": "Bay leaf",
    "beancurd": "Tofu",
    "beans": "Beans and peas green, fava, lima, soybean, wax, snow, sugar snap",
    "beef": "Beef steaks",
    "beef carpaccio": "Beef carpaccio",
    "beef steak": "Beef steaks",
    "beef tartare": "Beef tartare",
    "beet": "Beets",
    "beet salad": "Beet salad",
    "beignets": "Beignets",
    "bell pepper": "Peppers",
    "berry": "Berries cherries, gooseberries, lychee",
    "bibimbap": "Bibimbap",
    "bilberry": "Berries blackberries, boysenberries, currant",
    "birthday cake": "Cake",
    "biscuits": "Biscuits",
    "bitter melon": "Bitter melon",
    "black beans": "Black beans",
    "black currant": "Black currant",
    "blackberry": "Blackberries",
    "blood orange": "Blood orange",
    "blood sausage": "Blood sausage",
    "blue cheese": "Blue cheese",
    "blueberry": "Blueberries",
    "blueberry pie": "Fruit pies apple, peach, blueberry, apricot, cherry, blackberry",
    "bok choy": "Bok choy",
    "bonbon": "Bonbon",
    "boysenberry": "Berries blackberries, boysenberries, currant",
    "bread": "Commercial bread products including pan breads, flat breads, rolls, and buns",
    "bread pudding": "Bread pudding",
    "bread rolls": "Bread rolls",
    "breadfruit": "Breadfruit",
    "breadstick": "Breadsticks",
    "bream": "Bream",
    "brie": "Brie",
    "brioche": "Brioche",
    "brisket": "Beef brisket",
    "brittle": "Brittle",
    "broad beans": "Broad beans",
    "broccoli": "Broccoli and broccoli raab (rapini)",
    "broccolini": "Broccolini",
    "brown rice": "Rice brown",
    "brownie": "Brownie",
    "brulee": "Brulee",
    "bruschetta": "Bruschetta",
    "brussels sprout": "Brussels sprouts",
    "buckwheat": "Buckwheat whole grain",
    "burrito": "Burrito",
    "butter": "Butter",
    "cabbage": "Cabbage",
    "caesar salad": "Caesar salad",
    "cake": "Commercial cakes and muffins",
    "cake pop": "Cake pop",
    "calamari": "Calamari",
    "camembert": "Camembert",
    "canape": "Canape",
    "candy": "Candy",
    "candy apple": "Candy apple",
    "candy bar": "Candy bar",
    "cannoli": "Cannoli",
    "cantaloupe": "Cantaloupe",
    "caper": "Caper",
    "caprese salad": "Caprese salad",
    "caramel apple": "Caramel apple",
    "cardoon": "Cardoon",
    "carp": "Carp",
    "carpaccio": "Carpaccio",
    "carrot": "Carrots, parsnips",
    "carrot cake": "Carrot cake",
    "cashew": "Cashews no shell",
    "cassava": "Cassava",
    "casserole": "Casseroles",
    "cauliflower": "Cauliflower",
    "caviar": "Caviar fresh, in jar",
    "celery": "Celery",
    "cereal": "Cereal, dry mixes",
    "ceviche": "Ceviche",
    "chard": "Chard",
    "cheddar": "Cheddar",
    "cheese": "Cheese",
    "cheeseburger": "Cheeseburger",
    "cheesecake": "Cheesecake",
    "cherry": "Cherries",
    "cherry tomato": "Cherry tomatoes",
    "chestnut": "Chestnut",
    "chicken": "Chicken whole",
    "chicken breast": "Chicken parts breast halves, bone-in",
    "chicken curry": "Chicken curry",
    "chicken leg": "Chicken parts legs or thighs",
    "chicken wings": "Chicken wings",
    "chickpeas": "Chickpeas",
    "chili": "Chili",
    "chili pepper": "Chili pepper",
    "chips": "Potato chips",
    "chives": "Chives",
    "chocolate": "Chocolate",
    "chorizo": "Chorizo fresh",
    "chowder": "Chowder",
    "churros": "Churros",
    "chutney": "Chutney",
    "ciabatta": "Ciabatta",
    "cinnamon roll": "Cinnamon rolls",
    "citron": "Citron",
    "citrus": "Citrus fruit lemon, lime, orange, grapefruit, tangerines, clementines",
    "clam": "Clam",
    "clam chowder": "Clam chowder",
    "clementine": "Clementine",
    "cobbler": "Cobbler",
    "cockle": "Cockle",
    "coconut": "Coconuts fresh",
    "coleslaw": "Coleslaw homemade, prepared",
    "collards": "Collards",
    "common bean": "Common bean",
    "compote": "Compote",
    "cookie": "Cookies soft",
    "corn": "Corn on the cob",
    "corn bread": "Corn bread",
    "corn salad": "Corn salad",
    "corned beef": "Corned beef in pouch with pickling juices",
    "cornflakes": "Cornflakes",
    "cottage cheese": "Cottage cheese",
    "couscous": "Couscous",
    "crab": "Crab",
    "crab cakes": "Crab cakes",
    "cracker": "Crackers",
    "cranberry": "Cranberries",
    "crayfish": "Crayfish",
    "creme brulee": "Creme brulee",
    "crepe": "Crepe",
    "crescent roll": "Crescent roll",
    "cress": "Cress",
    "crispbread": "Crispbread",
    "croissant": "Croissant",
    "croque madame": "Croque madame",
    "croquette": "Croquette",
    "crouton": "Croutons",
    "crunch": "Crunch",
    "cucumber": "Cucumbers",
    "cupcake": "Cupcake",
    "curd": "Curd",
    "currant": "Currant",
    "custard": "Custard",
    "cuttlefish": "Cuttlefish",
    "daikon": "Daikon",
    "dandelion greens": "Dandelion greens",
    "danish pastry": "Danish pastry",
    "date": "Dates",
    "deviled eggs": "Deviled eggs",
    "dough": "Dough",
    "doughnut": "Doughnuts",
    "dragonfruit": "Dragonfruit",
    "dried apricot": "Apricots",
        "dried fruit": "Fruits, dried raisins, apricots, mangoes, cranberries, etc.",
    "drumstick": "Drumstick",
    "duck": "Duckling domestic or wild, whole",
    "dumpling": "Dumplings",
    "durian": "Durian",
    "eclair": "Eclair",
    "edamame": "Edamame fresh",
    "eel": "Eel",
    "egg": "Eggs in shell",
    "egg white": "Eggs raw whites, yolks",
    "egg yolk": "Eggs raw whites, yolks",
    "eggplant": "Eggplant",
    "elderberry": "Elderberry",
    "endive": "Endive",
    "english muffin": "English muffin",
    "escargots": "Escargots",
    "falafel": "Falafel",
    "farfalle": "Farfalle",
    "fava beans": "Beans and peas green, fava, lima, soybean, wax, snow, sugar snap",
    "fiddlehead": "Fiddlehead",
    "fig": "Figs",
    "filet mignon": "Beef tenderloin, whole",
    "fillet of sole": "Fillet of sole",
    "fish": "Lean fish cod, flounder, haddock, halibut, sole, etc.",
    "fish and chips": "Fish and chips",
    "flan": "Flan",
    "flatbread": "Flatbread",
    "flatfish": "Flatfish",
    "florence fennel": "Florence fennel",
    "focaccia": "Focaccia",
    "foie gras": "Foie gras",
    "fondue": "Fondue",
    "frankfurters": "Hot dogs",
    "french beans": "French beans",
    "french bread": "French bread",
    "french fries": "French fries",
    "french onion soup": "French onion soup",
    "french toast": "French toast",
    "fried calamari": "Fried calamari",
    "fried egg": "Fried egg",
    "fried rice": "Fried rice",
    "frittata": "Frittata",
    "fritter": "Fritter",
    "frozen yogurt": "Frozen yogurt",
    "fruit salad": "Fruit salad",
    "fruitcake": "Fruitcake",
    "fudge": "Fudge",
    "fusilli": "Fusilli",
    "galette": "Galette",
    "garlic": "Garlic",
    "garlic bread": "Garlic bread",
    "garlic chives": "Garlic chives",
    "gazpacho": "Gazpacho",
    "gherkin": "Gherkin",
    "ginger": "Ginger root",
    "gnocchi": "Gnocchi",
    "goats cheese": "Goat cheese",
    "goji berry": "Goji berry",
    "goose": "Goose domestic or wild, whole",
    "gooseberry": "Gooseberry",
    "gorgonzola": "Gorgonzola",
    "gouda": "Gouda",
    "goulash": "Goulash",
    "gourd": "Gourd",
    "granola": "Granola",
    "grape": "Grapes",
    "grapefruit": "Grapefruit",
    "greek salad": "Greek salad",
    "green bean": "Green bean",
    "green onion": "Green onions",
    "grilled cheese sandwich": "Grilled cheese sandwich",
    "grits": "Grits",
    "ground beef": "Beef ground",
    "guacamole": "Guacamole",
    "guava": "Guava",
    "gyoza": "Gyoza",
    "gyro": "Gyro",
    "habanero pepper": "Habanero pepper",
    "halibut": "Halibut",
    "ham": "Ham canned ('keep refrigerated' label)",
    "hamburger": "Hamburger",
    "hash": "Hash",
    "hazelnut": "Hazelnut",
    "herring": "Herring",
    "honey": "Honey",
    "honeydew melon": "Honeydew",
    "hot dog": "Hot dogs",
    "huckleberry": "Huckleberry",
    "huevos rancheros": "Huevos rancheros",
    "hummus": "Hummus commercial (pasteurized, with preservatives)",
    "ice cream": "Ice cream",
    "iceberg lettuce": "Lettuce iceberg, romaine",
    "jackfruit": "Jackfruit",
    "jalapeno": "Jalapeno",
    "jelly beans": "Jelly beans",
    "jerusalem artichoke": "Jerusalem artichoke",
    "jicama": "Jicama",
    "jordan almonds": "Jordan almonds",
    "jujube": "Jujube",
    "juniper berry": "Juniper berry",
    "kale": "Kale",
    "kebab": "Kebab",
    "kettle corn": "Kettle corn",
    "kidney bean": "Kidney bean",
    "kingfish": "Kingfish",
    "kipper": "Kipper",
    "kiwi fruit": "Kiwi fruit",
    "knish": "Knish",
    "kohlrabi": "Kohlrabi",
    "kombu": "Kombu",
    "kumquat": "Kumquat",
    "lamb": "Lamb leg, bone-in - small",
    "lamb chops": "Lamb chops, ribs, or loin",
    "lamb's lettuce": "Lamb's lettuce",
    "lasagna": "Lasagna",
    "lavender": "Lavender",
    "leek": "Leeks",
    "lemon": "Lemon",
    "lemon peel": "Lemon peel",
    "lentil": "Lentil",
    "lettuce": "Lettuce leaf, spinach",
    "lima bean": "Lima bean",
    "lime": "Lime",
    "lobster": "Fresh whole lobster live",
    "lobster bisque": "Lobster bisque",
    "loin": "Loin",
    "lollipop": "Lollipop",
    "lotus root": "Lotus root",
    "lox": "Lox",
    "lychee": "Lychee",
    "macadamia nut": "Macadamias no shell",
    "macaron": "Macaron",
    "macaroni": "Macaroni",
    "macaroon": "Macaroon",
    "mackerel": "Mackerel",
    "mandarin orange": "Mandarin orange",
    "mango": "Mango",
    "maple syrup": "Maple syrup",
    "marjoram": "Marjoram",
    "marshmallow": "Marshmallows",
    "marzipan": "Marzipan",
    "mashed potatoes": "Mashed potatoes",
    "meat": "Variety meats liver, tongue, chitterlings, etc.",
    "meat pie": "Meat pie",
    "meatball": "Meatballs",
    "meatloaf": "Meatloaf",
    "melon": "Melons",
    "meringue": "Meringue",
    "millet": "Millet whole grain",
    "mint": "Mint",
    "miso soup": "Miso soup",
    "mochi": "Mochi",
    "mousse": "Mousse",
    "mozzarella": "Mozzarella",
    "muesli": "Muesli",
    "muffin": "Muffin homemade - including bran, blueberry, banana, corn, chocolate chip",
    "mulberry": "Mulberry",
    "mung bean": "Mung bean",
    "mushroom": "Mushrooms",
    "mussel": "Mussel",
    "mutton": "Mutton",
    "nachos": "Nachos",
    "napa cabbage": "Napa cabbage",
    "nectarine": "Nectarines",
    "nigiri": "Nigiri",
    "noodle": "Noodles",
    "nori": "Nori",
    "nougat": "Nougat",
    "nut": "Nuts jars or cans",
    "oat": "Oats whole grain",
    "oatmeal": "Oatmeal",
    "octopus": "Octopus",
    "okra": "Okra",
    "olive": "Olives from olive bar",
    "omelette": "Omelette",
    "onion": "Onions yellow, white, red, etc.",
    "onion rings": "Onion rings",
    "orange": "Orange",
    "oyster": "Oyster",
    "pad thai": "Pad Thai",
    "paella": "Paella",
    "pancake": "Pancakes, waffles",
        "pancetta": "Pancetta",
    "panna cotta": "Panna cotta",
    "papaya": "Papaya, mango, feijoa, passionfruit, casaha melon",
    "parfait": "Parfait",
    "parmesan": "Cheese parmesan; shredded or grated",
    "parsnip": "Carrots, parsnips",
    "passionfruit": "Papaya, mango, feijoa, passionfruit, casaha melon",
    "pasta": "Pasta",
    "pastrami": "Pastrami",
    "pastry": "Pastries, danish",
    "pate": "Pate meat",
    "pea": "Peas green",
    "peach": "Peaches, nectarines, plums, pears, sapote",
    "peanut": "Peanuts no shell",
    "peapod": "Peapod",
    "pear": "Pears",
    "pearl onion": "Pearl onion",
    "pecan": "Pecans no shell",
    "penne": "Penne",
    "pepperoni": "Pepperoni",
    "perch": "Perch",
    "persimmon": "Persimmon",
    "pho": "Pho",
    "pickle": "Pickles",
    "pie": "Pie",
    "pike": "Pike",
    "pilaf": "Pilaf",
    "pine nut": "Pine nuts",
    "pineapple": "Pineapple",
    "pistachio": "Pistachios shell or no shell",
    "pita bread": "Pita bread",
    "pizza": "Pizza frozen",
    "plum": "Plums",
    "polenta": "Polenta shelf-stable",
    "pomegranate": "Pomegranate",
    "pomelo": "Pomelo",
    "popcorn": "Popcorn commercially popped in bags",
    "popovers": "Popovers",
    "poppy seed roll": "Poppy seed roll",
    "popsicle": "Popsicle",
    "pork": "Pork loin roast, bone-in",
    "pork chop": "Pork loin chops, bone-in",
    "pork pie": "Pork pie",
    "porridge": "Porridge",
    "pot roast": "Pot roast",
    "potato": "Potatoes",
    "potato onion": "Potato onion",
    "poutine": "Poutine",
    "praline": "Praline",
    "prawn": "Prawn",
    "pretzel": "Pretzels",
    "prime rib": "Beef rib roast, bone-in",
    "prosciutto": "Prosciutto",
    "prune": "Prunes",
    "pudding": "Pudding",
    "pumpkin": "Pumpkins",
    "pumpkin seeds": "Pumpkin seeds raw, no shell",
    "quiche": "Quiche",
    "quince": "Quince",
    "quinoa": "Quinoa cooked",
    "radicchio": "Radicchio",
    "radish": "Radishes",
    "raisin": "Raisins",
    "raisin bread": "Raisin bread",
    "rambutan": "Rambutan",
    "ramen": "Ramen",
    "raspberry": "Raspberries",
    "ratatouille": "Ratatouille",
    "ravioli": "Ravioli",
    "red cabbage": "Red cabbage",
    "red velvet cake": "Red velvet cake",
    "rhubarb": "Rhubarb",
    "ribbon-cut pasta": "Ribbon-cut pasta",
    "rice": "Rice white or wild",
    "risotto": "Risotto",
    "roast beef": "Beef roast",
    "roe": "Roe",
    "romaine": "Romaine lettuce",
    "roquefort": "Roquefort",
    "rosemary": "Rosemary",
    "rutabaga": "Rutabagas",
    "sage": "Sage",
    "salad": "Salad",
    "salami": "Salami",
    "salmon": "Fatty fish bluefish, catfish, mackerel, mullet, salmon, tuna, etc.",
    "salsa": "Salsa picante and taco sauces",
    "samosa": "Samosa",
    "sandwich": "Sandwich",
    "sardine": "Sardine",
    "sashimi": "Sashimi",
    "sauerkraut": "Sauerkraut",
    "sausage": "Sausages",
    "savory": "Savory",
    "scallop": "Scallop",
    "scallion": "Scallions",
    "scone": "Scones",
    "scorpion": "Scorpion",
    "sea bass": "Sea bass",
    "sea cucumber": "Sea cucumber",
    "seafood": "Seafood mixed",
    "seafood salad": "Seafood salad",
    "seaweed": "Seaweed",
    "seitan": "Seitan",
    "shallot": "Shallots",
    "shrimp": "Shrimp",
    "skate": "Skate",
    "sliders": "Sliders",
    "slim jim": "Slim Jim",
    "sloppy joe": "Sloppy Joe",
    "smelt": "Smelt",
    "smoothie": "Smoothie",
    "snail": "Snail",
    "snake": "Snake",
    "snap pea": "Snap peas",
    "soba noodles": "Soba noodles",
    "sorbet": "Sorbet",
    "sorghum": "Sorghum",
    "soup": "Soup",
    "sour cream": "Sour cream",
    "soy milk": "Soy milk",
    "soy sauce": "Soy sauce",
    "spaghetti": "Spaghetti",
    "spam": "Spam",
    "spanakopita": "Spanakopita",
    "sparkling beverage": "Sparkling beverage",
    "spelt": "Spelt",
    "spinach": "Spinach",
    "spring onion": "Spring onions",
    "sprout": "Sprouts",
    "squab": "Squab",
    "squash": "Squash",
    "squid": "Squid",
    "steak": "Beef steak",
    "stew": "Stew",
    "stilton": "Stilton",
    "strawberry": "Strawberries",
    "strawberry shortcake": "Strawberry shortcake",
    "sugar": "Sugar",
    "sukiyaki": "Sukiyaki",
    "sultana": "Sultanas",
    "sunflower seed": "Sunflower seed kernels",
    "sweetbread": "Sweetbreads",
    "sweetcorn": "Sweetcorn",
    "sweet potato": "Sweet potatoes",
    "swordfish": "Swordfish",
    "tabbouleh": "Tabbouleh",
    "taco": "Taco",
    "tagliatelle": "Tagliatelle",
    "tahini": "Tahini",
    "tamarind": "Tamarind",
    "tangerine": "Tangerine",
    "tapenade": "Tapenade",
    "taro": "Taro",
    "tarragon": "Tarragon",
    "tea": "Tea",
    "teriyaki": "Teriyaki",
    "thyme": "Thyme",
    "toffee": "Toffee",
    "tofu": "Tofu",
    "tomatillo": "Tomatillo",
    "tomato": "Tomatoes",
    "tortellini": "Tortellini",
    "tortilla": "Tortillas",
    "truffle": "Truffle",
    "tuna": "Tuna",
    "turkey": "Turkey",
    "turkey breast": "Turkey breast",
    "turmeric": "Turmeric",
    "turnip": "Turnips",
    "tutti-frutti": "Tutti-frutti",
    "udon noodles": "Udon noodles",
    "ugli fruit": "Ugli fruit",
    "vanilla": "Vanilla",
    "veal": "Veal",
    "vegetable": "Vegetables mixed",
    "vegetable oil": "Vegetable oil",
    "venison": "Venison",
    "vermicelli": "Vermicelli",
    "vinegar": "Vinegar",
    "vodka": "Vodka",
    "waffle": "Waffles",
    "walnut": "Walnuts no shell",
    "wasabi": "Wasabi",
    "water": "Water",
    "water chestnut": "Water chestnuts",
    "watercress": "Watercress",
    "watermelon": "Watermelon",
    "wheat bread": "Wheat bread",
    "wheat germ": "Wheat germ",
    "whiskey": "Whiskey",
    "white bread": "White bread",
    "white chocolate": "White chocolate",
    "white rice": "White rice",
    "white wine": "White wine",
    "wild boar": "Wild boar",
    "wine": "Wine",
    "winter melon": "Winter melon",
    "wonton": "Wonton",
    "yak": "Yak",
    "yam": "Yams",
    "yellowfin tuna": "Yellowfin tuna",
    "yogurt": "Yogurt",
    "yolk": "Eggs raw whites, yolks",
    "yorkshire pudding": "Yorkshire pudding",
    "yucca": "Yucca",
    "yuzu": "Yuzu",
    "ziti": "Ziti",
    "zucchini": "Zucchini"
}


# Create your views here.
# request handler
@csrf_exempt
def food_type(request):
    # Get the Clarifai PAT from the environment variables
    CLARIFAI_PAT = config('CLARIFAI_PAT')
    os.environ['CLARIFAI_PAT'] = CLARIFAI_PAT
    
    if request.method == 'POST' and request.FILES['image']:
        # get the image from the request
        image = request.FILES['image']
        # Save the image temporarily
        img_name = default_storage.save(image.name, image)
        img_path = default_storage.path(img_name)

        # Prediction model
        model = Model("https://clarifai.com/clarifai/main/models/food-item-recognition")

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
    mapped_name = food_mapping.get(food_name, '')
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
    # Get the Clarifai PAT from the environment variables
    CLARIFAI_PAT = config('CLARIFAI_PAT')
    os.environ['CLARIFAI_PAT'] = CLARIFAI_PAT
    
    if request.method == 'POST' and request.FILES['image']:
        # get the image from the request
        image = request.FILES['image']
        # Save the image temporarily
        img_name = default_storage.save(image.name, image)
        img_path = default_storage.path(img_name)

        # Prediction model
        model = Model("https://clarifai.com/clarifai/main/models/food-item-recognition")

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
            
            mapped_name = food_mapping.get(max_type, '')
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