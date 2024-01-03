import * as axios from "axios";
import * as fs from "fs";

const readToken = (filePath: string): string => {
  const tokenData = JSON.parse(fs.readFileSync(filePath, "utf-8"))["token"];
  return tokenData.token;
};

const API_URL = "https://api-inference.huggingface.co/models/nateraw/food";
const tokenFilePath = "ml/huggingfaceToken.json";
const headers = {
  Authorization: `Bearer ${readToken(tokenFilePath)}`
};

const query = async (filename: string): Promise<any> => {
  const data = fs.readFileSync(filename);

  const response = await axios.default.post(API_URL, data, {
    headers
  });

  return response.data;
};

const main = async (): Promise<void> => {
  try {
    const output = await query("ml/pizza.webp");
    console.log(output);
  } catch (error) {
    console.error("Error:", error);
  }
};

main();
