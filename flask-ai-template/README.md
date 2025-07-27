# Flask AI Template 🚀

A minimal production-ready Flask boilerplate to quickly build AI-based web apps using Hugging Face APIs.

## 🌟 Features

- Clean HTML + CSS frontend with pastel-themed UI
- Easy integration with Hugging Face's Inference API
- `.env` support for secure API keys
- Chat history with clear button
- Simple, editable file structure


## 📁 Project Structure

```
flask-ai-template/
├── static/
│   └── chat.css
│   └── homepage.css
├── templates/
│   └── index.html
│   └── chat.html
├── routes/
│   └── __init__.py
│   └── chat.py
│   └── home.py
├── services/
│   └── ai_client.py
├── app.py
├── config.py
├── .env
├── .gitignore
├── README.md
├── requirements.txt
```


## ⚙ Setup Instructions

1. **Clone the Repo**

```bash
git clone https://github.com/HashSlap-Summer-of-Code/launch-base/flask-ai-template
cd flask-ai-template
```

2. **Create \& Activate Virtual Environment**

```bash
python -m venv chat_venv
```

**Windows**

```bash
chat_venv\Scripts\activate
```

**macOS/Linux**

```bash
source chat_venv/bin/activate
```

3. **Install Dependencies**

```bash
pip install -r requirements.txt
```

4. **Set Your API Key**

Create a `.env` file:

```
HF_API_KEY=your_huggingface_api_key
```

> You can get a free token from: https://huggingface.co/settings/tokens
5. **Run the App**

```bash
python home.py
```

Open your browser and go to `http://localhost:5000`

## 📌 Requirements

- Python 3.8+
- Flask
- python-dotenv
- huggingface_hub

You can install everything using:

```bash
pip install -r requirements.txt
```

Made with 💙

