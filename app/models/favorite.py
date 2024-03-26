from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy import ForeignKey


class Favorite(db.Model):
    __tablename__ = 'favorites'

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    car_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("cars.id")), nullable=False)

    user = db.relationship("User", back_populates="favorites")
    car = db.relationship("Car", back_populates="favorites")

    def to_dict(self):
        return {
        "id": self.id,
        "userId": self.user_id,
        "carId": self.car_id
    }
