from app.models import db, Car, environment, SCHEMA
from sqlalchemy.sql import text


def seed_cars():
    car1 = Car(
        user_id= 1,
        price= 20000,
        year= 2018,
        model= 'Civic',
        make= 'Honda',
        city= 'New York',
        state= 'NY',
        mileage= 50000,
        description= 'Great condition, low mileage.',
        )
    car2 = Car(
        user_id= 1,
        price= 25000,
        year= 2020,
        model= 'Accord',
        make= 'Honda',
        city= 'Los Angeles',
        state= 'CA',
        mileage= 30000,
        description= 'Like new, well-maintained.')
    car3 = Car(
        user_id=1,
        price=18000,
        year=2015,
        model='Corolla',
        make= 'Toyota',
        city= 'Chicago',
        state= 'IL',
        mileage= 70000,
        description= 'Reliable and fuel-efficient.',
    )
    car4 = Car(
        user_id= 2,
        price= 22000,
        year= 2019,
        model= 'Camry',
        make='Toyota',
        city='Houston',
        state= 'TX',
        mileage=40000,
        description= 'Spacious and comfortable.'
    )
    car5 = Car(
        user_id= 1,
        price= 30000,
        year= 2021,
        model= 'Model 3',
        make= 'Tesla',
        city= 'San Francisco',
        state= 'CA',
        mileage= 20000,
        description= 'Electric, high-performance sedan.'
    )
    car6 = Car(
        user_id= 2,
        price= 15000,
        year= 2016,
        model= 'F-150',
        make='Ford',
        city='Miami',
        state='FL',
        mileage=80000,
        description='Powerful and rugged truck.'
    )
    car7 = Car(
        user_id= 2,
        price= 28000,
        year= 2020,
        model= 'RAV4',
        make='Toyota',
        city='Seattle',
        state='WA',
        mileage=35000,
        description= 'SUV with excellent fuel economy.'
    )

    car8 = Car(
        user_id= 2,
        price= 21000,
        year= 2017,
        model= 'Optima',
        make= 'Kia',
        city= 'Atlanta',
        state='GA',
        mileage= 60000,
        description='Comfortable and stylish sedan.'
    )

    car9 = Car(
        user_id= 3,
        price= 17000,
        year= 2016,
        model= 'Sentra',
        make= 'Nissan',
        city= 'Phoenix',
        state= 'AZ',
        mileage= 65000,
        description= 'Compact sedan with good fuel economy.'
    )
    car10 = Car(
        user_id= 3,
        price= 26000,
        year= 2019,
        model= 'Highlander',
        make= 'Toyota',
        city= 'Denver',
        state= 'CO',
        mileage= 45000,
        description= 'Versatile and spacious SUV.'
    )

    db.session.add(car1)
    db.session.add(car2)
    db.session.add(car3)
    db.session.add(car4)
    db.session.add(car5)
    db.session.add(car6)
    db.session.add(car7)
    db.session.add(car8)
    db.session.add(car9)
    db.session.add(car10)
    db.session.commit()



def undo_cars():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cars RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM cars"))

    db.session.commit()
