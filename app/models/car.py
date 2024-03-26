from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from sqlalchemy import ForeignKey


class Car(db.Model):
    __tablename__ = 'cars'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    year = db.Column(db.Integer, nullable=False)
    model = db.Column(db.String(20), nullable=False)
    make = db.Column(db.String(20), nullable=False)
    city = db.Column(db.String(30), nullable=False)
    state = db.Column(db.String(30), nullable=False)
    mileage = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)


    owner = db.relationship("User", back_populates="cars")
    favorites = db.relationship("Favorite", back_populates="car", cascade='all, delete')
    reviews = db.relationship("Review", back_populates="car", cascade='all, delete')



    def to_dict(self):
        returning = dict()
        owner = self.owner.to_dict()
        returning['owner']=owner,
        returning['id']= self.id
        returning['price']= self.price
        returning['year'] = self.year
        returning['model'] = self.model
        returning['make'] = self.make
        returning['city'] = self.city
        returning['state'] = self.state
        returning['mileage'] = self.mileage
        returning['description']= self.description
        returning['createdAt']= self.created_at
        returning['updatedAt'] = self.updated_at

        return returning
