# Django Starter Template 🚀

A minimal, beginner-friendly Django boilerplate to kickstart web development projects. Designed for HashSlap Summer of Code contributors.

## 🌟 Features

- Clean project structure with modular design
- Ready-to-run development server
- SQLite database for quick setup
- Easy to extend with apps, templates, and static files
- Compatible with virtual environments

---

## 📁 Project Structure

```
django-template/
├── core/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── manage.py
├── requirements.txt
├── README.md
```

---

## ⚙ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/launch-base.git
cd launch-base/django-template
```

### 2. Create & Activate Virtual Environment

```bash
python -m venv env
```

**Windows:**

```bash
env\Scripts\activate
```

**macOS/Linux:**

```bash
source env/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run Initial Migrations

```bash
python manage.py migrate
```

### 5. Start the Development Server

```bash
python manage.py runserver
```

Visit [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser to see the app running.

---

## 📌 Requirements

- Python 3.8+
- Django >=4.2

Install everything with:

```bash
pip install -r requirements.txt
```

---

Made with 💙 by the HashSlap community

