from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from sqlalchemy import ForeignKey


class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    car_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("cars.id")), nullable=False)
    review = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)


    user = db.relationship("User", back_populates="reviews")
    car = db.relationship("Car", back_populates="reviews")


    # @property
    # def product(self):
    #     return {
    #         'id': self.car.id,
    #         'user_id': self.car.user_id,
    #         'price': self.car.price,
    #         'year': self.car.year,
    #         'model': self.car.model,
    #         'make': self.car.make,
    #         'city': self.car.city,
    #         'state': self.car.state,
    #         'mileage': self.car.mileage,
    #         'description': self.car.description
    #     }

    def to_dict(self):
        return {
      "id": self.id,
      "user": self.user.to_dict(),
      "carId": self.car_id,
      "review": self.review,
      "createdAt": self.created_at,
      "updatedAt": self.updated_at,
    }
