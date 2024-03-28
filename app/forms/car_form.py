from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, SubmitField
# from wtforms.validators import DataRequired, Length
from datetime import datetime


newest_model_year = datetime.now().year + 1

class CreateCarForm(FlaskForm):
    price = IntegerField("Price")
    year = IntegerField("Year")
    model = StringField("Model")
    make = StringField("Make")
    city = StringField("City")
    state = StringField("State")
    mileage = IntegerField("Mileage")
    description = TextAreaField("Description")
    submit = SubmitField("Submit")
