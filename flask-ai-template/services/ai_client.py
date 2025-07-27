from huggingface_hub import InferenceClient
import os
from dotenv import load_dotenv

load_dotenv()

HF_API_KEY = os.getenv("HF_API_KEY")

client = InferenceClient(
    model = "mistralai/Mixtral-8x7B-Instruct-v0.1",
    token=HF_API_KEY
)
chat_history=[]

def ask_ai(prompt):
    global chat_history
    chat_history.append({"role": "user", "content": prompt})
    response = client.chat.completions.create(
        messages=chat_history,
        max_tokens=200
    )
    reply = response.choices[0].message.content.strip()
    chat_history.append({"role":"assistant", "content":reply})
    return reply

def reset_history():
    global chat_history
    chat_history = []