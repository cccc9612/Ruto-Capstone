from app.models import db, Car, environment, SCHEMA
from sqlalchemy.sql import text


def seed_cars():
    car1 = Car(
        user_id=1,
        price=35000,
        year=2019,
        model='Wrangler',
        make='Jeep',
        city='Los Angeles',
        state='CA',
        mileage=30000,
        description='Iconic off-road SUV for outdoor adventures.'
    )

    car2 = Car(
        user_id=1,
        price=85000,
        year=2022,
        model='Model Y',
        make='Tesla',
        city='Honolulu',
        state='HI',
        mileage=15000,
        description='Electric SUV with advanced technology and spacious interior.'
    )

    car3 = Car(
        user_id=2,
        price=30000,
        year=2017,
        model='Impreza',
        make='Subaru',
        city='Paris',
        state='Île-de-France',
        mileage=50000,
        description='Compact car with all-wheel-drive capability.'
    )

    car4 = Car(
        user_id=1,
        price=90000,
        year=2021,
        model='Cayenne',
        make='Porsche',
        city='Sydney',
        state='NSW',
        mileage=20000,
        description='Luxury SUV with powerful performance.'
    )

    car5 = Car(
        user_id=3,
        price=40000,
        year=2018,
        model='M5',
        make='BMW',
        city='London',
        state='England',
        mileage=35000,
        description='High-performance luxury sedan with elegant design.'
    )

    car6 = Car(
        user_id=2,
        price=50000,
        year=2020,
        model='Cherokee',
        make='Jeep',
        city='Los Angeles',
        state='CA',
        mileage=25000,
        description='Versatile SUV for urban and off-road driving.'
    )

    car7 = Car(
        user_id=1,
        price=80000,
        year=2022,
        model='Model X',
        make='Tesla',
        city='Honolulu',
        state='HI',
        mileage=18000,
        description='Electric SUV with cutting-edge technology.'
    )

    car8 = Car(
        user_id=3,
        price=35000,
        year=2016,
        model='Forester',
        make='Subaru',
        city='Paris',
        state='Île-de-France',
        mileage=60000,
        description='Reliable and spacious SUV for everyday use.'
    )

    car9 = Car(
        user_id=1,
        price=95000,
        year=2021,
        model='911 Turbo',
        make='Porsche',
        city='Sydney',
        state='NSW',
        mileage=25000,
        description='High-performance sports car with timeless design.'
    )

    car10 = Car(
        user_id=2,
        price=70000,
        year=2021,
        model='X7',
        make='BMW',
        city='London',
        state='England',
        mileage=20000,
        description='Luxurious SUV with spacious interior and advanced features.'
    )

    car11 = Car(
        user_id=3,
        price=30000,
        year=2020,
        model='Grand Cherokee',
        make='Jeep',
        city='Los Angeles',
        state='CA',
        mileage=25000,
        description='Luxurious SUV with off-road capabilities.'
    )
    car12 = Car(
        user_id=1,
        price=60000,
        year=2022,
        model='Model S',
        make='Tesla',
        city='Honolulu',
        state='HI',
        mileage=10000,
        description='High-performance electric sedan with advanced features.'
    )
    car13 = Car(
        user_id=2,
        price=35000,
        year=2018,
        model='Outback',
        make='Subaru',
        city='Paris',
        state='Île-de-France',
        mileage=40000,
        description='Reliable all-wheel-drive wagon for adventurous driving.'
    )
    car14 = Car(
        user_id=1,
        price=80000,
        year=2021,
        model='911',
        make='Porsche',
        city='Sydney',
        state='NSW',
        mileage=15000,
        description='Iconic sports car known for its performance and design.'
    )
    car15 = Car(
        user_id=3,
        price=45000,
        year=2019,
        model='X5',
        make='BMW',
        city='London',
        state='England',
        mileage=30000,
        description='Luxury SUV with a blend of performance and comfort.'
    )
    car16 = Car(
        user_id=1,
        price=40000,
        year=2017,
        model='Wrangler',
        make='Jeep',
        city='Los Angeles',
        state='CA',
        mileage=35000,
        description='Iconic off-road SUV for outdoor enthusiasts.'
    )
    car17 = Car(
        user_id=2,
        price=70000,
        year=2020,
        model='Model X',
        make='Tesla',
        city='Honolulu',
        state='HI',
        mileage=20000,
        description='Electric SUV with advanced technology and spacious interior.'
    )
    car18 = Car(
        user_id=3,
        price=30000,
        year=2016,
        model='Legacy',
        make='Subaru',
        city='Paris',
        state='Île-de-France',
        mileage=60000,
        description='Reliable sedan with all-wheel-drive capability.'
    )

    car19 = Car(
        user_id=1,
        price=90000,
        year=2022,
        model='Taycan',
        make='Porsche',
        city='Sydney',
        state='NSW',
        mileage=10000,
        description='Luxury electric sports sedan with stunning performance.'
    )
    car20 = Car(
        user_id=2,
        price=60000,
        year=2021,
        model='i8',
        make='BMW',
        city='London',
        state='England',
        mileage=15000,
        description='Futuristic plug-in hybrid sports car with head-turning design.'
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
    db.session.add(car11)
    db.session.add(car12)
    db.session.add(car13)
    db.session.add(car14)
    db.session.add(car15)
    db.session.add(car16)
    db.session.add(car17)
    db.session.add(car18)
    db.session.add(car19)
    db.session.add(car20)
    
    db.session.commit()



def undo_cars():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cars RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM cars"))

    db.session.commit()
