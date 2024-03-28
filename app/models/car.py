from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from sqlalchemy import ForeignKey


class Car(db.Model):
    __tablename__ = 'cars'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    price = db.Column(db.Integer)
    year = db.Column(db.Integer)
    model = db.Column(db.String(20))
    make = db.Column(db.String(20))
    city = db.Column(db.String(30))
    state = db.Column(db.String(30))
    mileage = db.Column(db.Integer)
    description = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)


    owner = db.relationship("User", back_populates="cars")
    reviews = db.relationship("Review", back_populates="car", cascade='all, delete')
    favorites = db.relationship("Favorite", back_populates="car", cascade='all, delete')

    # @property
    # def user(self):
    #     return {
    #         'id': self.owner.id,
    #         'first_name': self.owner.first_name,
    #         'last_name' : self.owner.last_name,
    #     }

    # @property
    # def reviews(self):
    #     return [review.to_dict() for review in self.reviews]

    def to_dict(self):
        returning = dict()
        owner = self.owner.username
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
        # returning['reviews']= self.reviews
        returning['createdAt']= self.created_at
        returning['updatedAt'] = self.updated_at

        return returning
    # {
    #         'id':self.id,
    #         'price': self.price,
    #         'year':self.year,
    #         'model':self.model,
    #         'make':self.make,
    #         'city':self.city,
    #         'state':self.state,
    #         'mileage':self.mileage,
    #         'description':self.description,
    #         # 'reviews':self.reviews,
    #         'created_at': self.created_at,
    #         'updated_at': self.updated_at
    #     }
