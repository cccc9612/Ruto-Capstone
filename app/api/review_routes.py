from flask import Blueprint, render_template, redirect,request,jsonify
from flask_login import current_user, login_required
from sqlalchemy import desc
from app.models import Review, db
from app.forms.review_form import CreateReviewForm

review_routes = Blueprint('review_routes', __name__)


# Update a review
@review_routes.route("/<int:id>", methods=["PUT"])
@login_required
def updateReview(id):
    form = CreateReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    get_review = Review.query.get(id)
    user = current_user.to_dict()

    if  get_review.to_dict()["user_id"] != user["id"]:
        return {"message": "unauthorized"}, 401
    
    if not get_review:
        return {"message": "Review not found."}, 404
    
    if form.validate_on_submit():
        if form.review.data:
            get_review.review = form.review.data
        db.session.commit()
    else:
        return form.errors
    
    updated_review = Review.query.get(id)
    updated_review_to_dict = updated_review.to_dict()
    return updated_review_to_dict    


# Delete a review
@review_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def deleteReview(id):
    get_review = Review.query.get(id)
    user = current_user.to_dict()

    if get_review.to_dict()["user_id"] != user["id"]:
        return {"message": "unauthorized"}, 401
    
    if not get_review:
        return {"message": "Review not found."}, 404
    
    if get_review:
        db.session.delete(get_review)
        db.session.commit()
        return {"message": "Review has been successfully deleted."}, 200
