from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length

class CreateReviewForm(FlaskForm):
    review = TextAreaField("Review", validators=[DataRequired(), Length(min=20, message="Minimum 20 characters required.")])
    submit = SubmitField("Submit")
