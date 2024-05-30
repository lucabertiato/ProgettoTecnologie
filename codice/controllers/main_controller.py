from flask import Flask, render_template, request, redirect, url_for, flash
import requests
from app import app

@app.route('/')
def index():
    #response = requests.get(app.secret_url, params={'client_id': app.secret_key})
    #data = response.json()
    #image_url = data['urls']['regular']
    #image_alt = data.get('alt_description', 'Immagine di Unsplash')
    #, image_url=image_url, image_alt=image_alt
    return render_template('index.html')