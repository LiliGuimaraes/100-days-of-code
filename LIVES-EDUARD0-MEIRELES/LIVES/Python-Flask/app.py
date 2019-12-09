import views
import contract
from flask import Flask, jsonify


def create_app():
    app = Flask(__name__)
    views.configure(app)
    contract.configure(app)
    return app
