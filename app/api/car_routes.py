from flask import Blueprint, request, jsonify
from flask_login import current_user, login_required
from app.models import Car, db, User, Review
from app.forms.car_form import CreateCarForm
from app.forms.review_form import CreateReviewForm


car_routes = Blueprint('car_routes', __name__)


# Get all cars
@car_routes.route('/')
def all_cars():
    all_cars= Car.query.all()
    return {"cars":[car.to_dict()for car in all_cars]}


# Get car details 
@car_routes.route('/<int:id>')
def car_details(id):
    car = Car.query.get(id)
    if not car:
        return {'message': 'Car not found'}, 404
    return car.to_dict()


# Get car reviews by car id
@car_routes.route("/<int:id>/reviews")
def car_review(id):
    # print ("Hiiiiiiiiiiiiiiiii")
    get_review = Review.query.filter(Review.car_id==id).all()
    print ("------------->>>>>>>>>>", get_review)
    
    if not get_review:
        return {"message": "This is not right"}
    
    all_reviews = [review.to_dict() for review in get_review]
    return {"reviews": all_reviews}



# Get all cars owned by the current user
@car_routes.route('/current', methods=["GET"])
@login_required
def currentUserCars():
    # print('Hiiiiiiiiiiiii')
    user = current_user.to_dict()
    allCars = Car.query.join(User).filter(User.id == user['id']).all()
    # print("allCars-------------", allCars)
    # print ("allcars-value >>>>>>>>>>",[car.to_dict() for car in allCars] )
    return {'cars': [car.to_dict() for car in allCars]}


# Add a car
@car_routes.route('/new',methods=['POST'])
@login_required
def createCar():
    form = CreateCarForm()
    form['csrf_token'].data= request.cookies['csrf_token']
    user = current_user.to_dict()

    if form.validate_on_submit():
        new_car = Car(
        user_id = user['id'],
        price = form.price.data,
        year = form.year.data,
        model = form.model.data,
        make = form.make.data,
        city = form.city.data,
        state = form.state.data,
        mileage = form.mileage.data,
        description = form.description.data
        )

        db.session.add(new_car)
        db.session.commit()
        return jsonify(new_car.to_dict())
    if form.errors:
        print(form.errors)
        return form.errors, 400


# Add a review
@car_routes.route("/<int:id>/reviews", methods=['POST'])
# @login_required
def add_review(id):
    form = CreateReviewForm()
    print("87 show show show")
    form['csrf_token'].data= request.cookies['csrf_token']
    user = current_user.to_dict()
    get_car = Car.query.get(id)
    
    if not get_car:
        print("BYEEEEEE no car")
        return {"message": "Car not found"}, 404

        
    if form.validate_on_submit():
        print("HELLLLLLLLLLLLLO")
        new_review=Review(
            user_id = user['id'],
            car_id = id,
            review= form.review.data
        )
        
        db.session.add(new_review)
        db.session.commit()
        print("FORM VALIDDDDDDDDD", new_review)
        return new_review.to_dict()

    if form.errors:
        print("ERRRRRRRORRR!!!", form.errors)
        return form.errors, 400



# Update a car
@car_routes.route('/<int:id>', methods=['PUT'])
@login_required
def updateCar(id):
    form = CreateCarForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    user = current_user.to_dict()
    get_car = Car.query.get(id)
    print("---------------",get_car)
    if not get_car:
        return {"message": "Car not found"}, 404
    if form.validate_on_submit():
        if form.price.data:
            get_car.price = form.price.data
    
        if form.year.data:
            get_car.year = form.year.data

        if form.model.data:
             get_car.model = form.model.data

        if form.make.data:
            get_car.make = form.make.data

        if form.city.data:
            get_car.city = form.city.data

        if form.state.data:
            get_car.state = form.state.data

        if form.mileage.data:
            get_car.mileage = form.year.data
    
        if form.description.data:
            get_car.description = form.description.data
        
    else:
        return form.errors, 400
    
    db.session.commit()
    
    updated_car = Car.query.get(id)
    updated_car_to_dict = updated_car.to_dict()
   
    return updated_car_to_dict

    

# Delete a car
@car_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def DeleteCar(id):
    user = current_user.to_dict()
    get_car = Car.query.get(id)
    
    if not get_car:
        return {"message": "Car not found"}, 404
    
    if get_car:
        db.session.delete(get_car)
        db.session.commit()
        return {"message": "Car has been deleted."}, 200
    
