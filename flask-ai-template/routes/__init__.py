from flask import Blueprint

from .home import home_bp
from .chat import chat_bp

def register_routes(app):
    app.register_blueprint(home_bp)
    app.register_blueprint(chat_bp)