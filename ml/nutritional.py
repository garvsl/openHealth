import requests
import csv
import json

# Replace with your GPT-4 API endpoint and API key
GPT4_API_ENDPOINT = "https://api.openai.com/v1/chat/completions"
GPT4_API_KEY = json.load(open("ml/openAIKey.json"))["token"]

# Food item for which you want nutritional information
food_item = "banana"

# Create a prompt for GPT-4
prompt = f"Provide nutritional information for {food_item}"

# Request data from GPT-4
response = requests.post(
    GPT4_API_ENDPOINT,
    model="gpt-4",
    headers={"Authorization": f"Bearer {GPT4_API_KEY}"},
    json={"prompt": prompt, "max_tokens": 100},
)
print("Response Status Code:", response.status_code)
print("Response Content:", response.text)
# if response.status_code == 200:
#     # Extract nutritional information from the GPT-4 response
#     nutritional_info = response.json()["choices"][0]["text"]

#     # Save nutritional information to a CSV file
#     with open("nutrition_info.csv", "w", newline="") as csv_file:
#         writer = csv.writer(csv_file)
#         writer.writerow(["Food Item", "Nutritional Information"])
#         writer.writerow([food_item, nutritional_info])

#     print(f"Nutritional information for {food_item} saved to nutrition_info.csv")

# else:
#     print(response.status_code)
#     print("Failed to retrieve nutritional information from GPT-4")
