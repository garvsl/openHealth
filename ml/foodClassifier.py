from flask import Flask, request

app = Flask(__name__)

import aiohttp
import json
import asyncio

token = json.load(open("ml/huggingfaceToken.json"))["token"]

API_URL = "https://api-inference.huggingface.co/models/nateraw/food"
headers = {"Authorization": f"Bearer {token}"}


@app.route("/predict/<filename>", methods=["GET"])
async def query(filename):
    try:
        with open(filename, "rb") as f:
            data = f.read()

        async with aiohttp.ClientSession() as session:
            async with session.post(API_URL, headers=headers, data=data) as response:
                return await response.json()

    except FileNotFoundError:
        return "File not found", 404


async def main():
    # This part is used for testing the function separately.
    output = await query("ml/pizza.webp")
    print(output)


if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())

if __name__ == "__main__":
    app.run()
