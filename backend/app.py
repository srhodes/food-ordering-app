from flask import Flask, jsonify, request
from secrets import API_SECRET_KEY
import requests

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/food_ordering_app'

connect_db(app)

@app.route('/api/ingredients')
def get_ingredients():
    query = request.args.get('query')
    response = requests.get(f'https://api.spoonacular.com/food/ingredients/search?apiKey={API_SECRET_KEY}&query={query}')
    return jsonify(response.json())
