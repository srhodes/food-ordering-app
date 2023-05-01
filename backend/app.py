from flask import Flask, jsonify, request
from models import db, connect_db, User
from secret import API_SECRET_KEY
import requests
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from flask_wtf.csrf import generate_csrf
from wtforms.validators import DataRequired

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/food_ordering_app'

connect_db(app)

class loginForm(FlaskForm):
    username = StringField("Username")
    password = PasswordField("Password")
    submit = SubmitField("Login")
    csrf_token = StringField(validators=[DataRequired()], default=generate_csrf())

class RegisterForm(FlaskForm):
    username = StringField("Username")
    password = PasswordField("Password")
    submit = SubmitField("Login")

    def validate_username(self, user):
        existing_user_username = User.query.filter_by(username=username.data).first()

        if existing_user_username:
            raise ValidationError("That username already exists. Please choose a different one")

@app.route('/api/ingredients')
def get_ingredients():
    query = request.args.get('query')
    response = requests.get(f'https://api.spoonacular.com/food/ingredients/search?apiKey={API_SECRET_KEY}&query={query}')
    return jsonify(response.json())
    
@app.route('/dashboard', method=['GET'])
def dashboard():
    return render_template('dashboard.html')

# Implement the authentication route
@app.route('/login', methods=['GET','POST'])
def login():
    with app.app_context():
        if request.method == 'POST':
            email = request.json['email']
            password = request.json['password']
            user = User.query.filter_by(email=email).first()

            if not user or not bcrypt.check_password_hash(user.password, password):
                return jsonify({'message': 'Invalid credentials'}), 401

            token = jwt.encode({'user_id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)}, app.config['SECRET_KEY'])
            return jsonify({'token': token.decode('UTF-8')})

        form = loginForm()
        return render_template('login.html', form=form, csrf_token=form.csrf_token)

# Implement the registration route
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.json['email']
        password = bcrypt.generate_password_hash(request.json['password']).decode('UTF-8')

        user = User(email=email, password=password)
        db.session.add(user)
        db.session.commit()

        return jsonify({'message': 'User created successfully'}), 201
    
    form = RegisterForm()
    return render_template('register.html', form=form)