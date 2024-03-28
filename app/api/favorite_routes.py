from flask import Blueprint, render_template, redirect,request,jsonify
from flask_login import current_user, login_required
from sqlalchemy import desc
from app.models import Review, db, User, Car, Favorite


favorite_routes = Blueprint('favorites', __name__)
