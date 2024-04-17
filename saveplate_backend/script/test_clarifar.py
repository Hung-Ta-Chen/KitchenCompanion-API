from clarifai.client.model import Model
import os

os.environ['CLARIFAI_PAT'] = 'ef34b3146c7340dbb9c1449d0aeec5c2'

# Model Predict
model = Model("https://clarifai.com/clarifai/main/models/food-item-recognition")
# model.predict_by_filepath(filepath="local_filepath", input_type="image")
response = model.predict_by_url(url="https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320078/blackberries-and-strawberries.jpg", input_type="image")

if response.status.code == 10000:
    for output in response.outputs:
        for concept in output.data.concepts:
            if concept.value > 0.9:
                print(f"Name: {concept.name}, Value: {concept.value}")
else:
    print("Failed to process the image")
