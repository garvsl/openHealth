"""
Function must have `huggingfaceToken.json` to get access to ml model
- this is basically an async function that returns the predicted label of the
food image that is inputted. 
- images must be located physically
"""

import aiohttp
import json
import asyncio

token = json.load(open("ml/huggingfaceToken.json"))['token']

API_URL = "https://api-inference.huggingface.co/models/nateraw/food"
headers = {"Authorization": f"Bearer {token}"}


async def query(filename):
    with open(filename, "rb") as f:
        data = f.read()

    async with aiohttp.ClientSession() as session:
        async with session.post(API_URL, headers=headers, data=data) as response:
            return await response.json()


async def main():
    output = await query("ml/pizza.webp")
    print(output)


if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
