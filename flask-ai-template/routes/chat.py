from flask import render_template, Blueprint, session, request
from services.ai_client import reset_history, ask_ai

chat_bp = Blueprint('chat', __name__)

@chat_bp.route('/chat', methods=['GET', 'POST'])
def chat_page():
    if "conversation" not in session:
        session["conversation"] = []

    if request.method == 'POST':
        action = request.form.get("action")

        if action == "clear":
            session["conversation"] = []
            reset_history()
            session.modified = True
        elif action == "send":
            user_input = request.form.get("user_input")
            if user_input:
                ai_response = ask_ai(user_input)
                session["conversation"].append({"sender":"user", "message":user_input})
                session["conversation"].append({"sender":"ai", "message":ai_response})
                session.modified = True
    
    return render_template("chat.html", conversation=session.get("conversation"))
