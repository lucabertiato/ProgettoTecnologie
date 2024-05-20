
from flask import Flask, render_template, request, redirect, url_for, flash
import requests

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Necessario per i messaggi flash

UNSPLASH_API_KEY = '7ekl5ryO02o7t_r-jVW8alO6RPcn_SWD43B7cA3JOTc'
UNSPLASH_URL = 'https://api.unsplash.com/photos/random'

@app.route('/')
def index():
    response = requests.get(UNSPLASH_URL, params={'client_id': UNSPLASH_API_KEY})
    data = response.json()
    image_url = data['urls']['regular']
    image_alt = data.get('alt_description', 'Immagine di Unsplash')
    return render_template('index.html', image_url=image_url, image_alt=image_alt)

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    
    # Qui puoi aggiungere la logica di autenticazione
    # Per ora, supponiamo che l'accesso sia sempre riuscito
    if username == "admin" and password == "password":
        flash('Accesso riuscito!', 'success')
        return redirect(url_for('index'))
    else:
        flash('Nome utente o password errati.', 'danger')
        return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)

