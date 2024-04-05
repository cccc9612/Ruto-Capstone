from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text


def seed_reviews():
    review1 = Review(
        user_id=2,
        car_id=1,
        review='Great car, smooth ride.',     
    )
    review2 = Review(
        user_id=2,
        car_id=2,
        review='Excellent performance, highly recommended.',  
    )
    review3 = Review(
        user_id=1,
        car_id=3,
        review='Very reliable, low maintenance costs.',   
    )
    review4 = Review(
        user_id=3,
        car_id=4,
        review='Smooth driving experience, great fuel efficiency.', 
    )
    review5 = Review(
        user_id=1,
        car_id=5,
        review='Spacious interior, comfortable seats.',    
    )
    review6 = Review(
        user_id=3,
        car_id=6,
        review='Fun to drive, handles corners well.',  
    )
    review7 = Review(
        user_id=3,
        car_id=7,
        review='Excellent safety features, peace of mind while driving.',   
    )
    review8 = Review(
        user_id=1,
        car_id=8,
        review='Luxurious interior, premium materials used.',
    )
    review9 = Review(
        user_id=2,
        car_id=9,
        review='Responsive acceleration, sporty feel.', 
    )
    review10 = Review(
        user_id=1,
        car_id=10,
        review='High ground clearance, perfect for off-road adventures.', 
    )
    review11 = Review(
        user_id=2,
        car_id=9,
        review='Economical to own, low maintenance costs.',  
    )
    review12 = Review(
        user_id=1,
        car_id=8,
        review='Great value for money, reliable transportation.',
    )
    review13 = Review(
        user_id=3,
        car_id=7,
        review='Smooth transmission, effortless gear shifts.',   
    )
    review14 = Review(
        user_id=1,
        car_id=6,
        review='Advanced infotainment system, easy to use.',   
    )
    review15 = Review(
        user_id=1,
        car_id=5,
        review='Solid build quality, feels sturdy on the road.',     
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.commit()



def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
