from flask import Flask, render_template, request, redirect, url_for, flash
import requests

app = Flask(__name__)
app.secret_key = '7ekl5ryO02o7t_r-jVW8alO6RPcn_SWD43B7cA3JOTc'
app.secret_url = 'https://api.unsplash.com/photos/random'

from controllers.main_controller import *

if __name__ == '__main__':
    app.run(debug=True)

