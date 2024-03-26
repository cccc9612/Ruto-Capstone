# Ruto - User Stories

## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the lob-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-up form:
    * I would like the website to inform me of the validations I failed to pass and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged-in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to a page displaying recent FauxTweets.
      * So that I can easily log out to keep my information secure.

## 1. Cars

### Viewing Cars

* As a logged-in _or_ logged-out user, I want to be able to view a selection of all the cars.
  * When I'm on the `/cars` page:
    * I can view all the cars in the database.
    * I can also view the location and price of the cars.

### Adding Cars

* As a logged-in user, I want to be able to add cars.
  * When I'm on the `users/current/cars/new` page:
    * I can add a new car.

### Updating Cars

* As a logged-in user, I want to be able to update my cars by clicking an Update button.
  * When I'm on the `/users/current/cars` pages:
    * I can click "Update" to make changes to the cars I have added.


### Deleting Cars

* As a logged-in user, I want to be able to delete my cars by clicking a Delete button.
  * When I'm on the `/users/current/cars` pages:
    * I can click "Delete" to permanently delete a car I have added.

## 2. Reviews

### Viewing Reviews

* As a logged-in _or_ logged-out user, I want to be able to view a specific car and all the reviews belong to this car.
  * When I'm on the `/cars/:id` page:
    * I can view the content of the car as well as the associated reviews.
    * I can also view the price and description of the car.


### Adding Reviews

* As a logged-in user, I want to be able to create a new review.
  * When I'm on the `/users/current/cars/:id` page:
    * I can create a new review.


### Updating Reviews
* As a logged-in user, I want to be able to update my reviews by clicking an Update button.
  * When I'm on the `/users/current/reviews` pages:
    * I can click "Update" to make changes to reviews I have created.
      * I can add or delete reviews I added to the cars.


### Deleting Reviews

* As a logged-in user, I want to be able to delete my reviews by clicking a Delete button.
  * When I'm on the `/users/current/reviews` pages:
    * I can click "Delete" to permanently delete a review I have created.

## 3. Favorites

### Viewing Favorites

* As a logged-in _or_ logged-out user, I want to be able to view all the likes of the cars.
  * When I'm on the `/cars` age:
    * I can view the total likes of the cars.


### Adding Favorites

* As a logged-in user, I want to be able to add a car to my favorites by clicking a heart button.
  * When I'm on the `/cars/:id` page:
    * I can add the car to my favorites.


### Removing Favorites
* As a logged-in user, I want to be able to remove the car from my favorites by clicking the filled heart button.
  * When I'm on the `/users/current/favorites` page:
    * I can remove the cars from my favorites.


## 4. Rentals

### Viewing Rentals

* As a logged-in user, I want to be able to view all my previous rentals.
  * When I'm on the `/users/current/rentals` page:
    * I can view all the cars I rented before.
    * I can also view the rental date of my reservations.


### Adding Cars To Shopping Cart

* As a logged-in user, I want to be able to add cars to the shopping cart.
  * When I'm on the `/cars` or `/cars/:id` page:
    * I can add cars to the shopping cart.


### Updating Shopping Cart
* As a logged-in user, I want to be able to update the cars in the shopping cart by clicking the shopping cart icon.
  * When I'm on any page of the site, I can click the shopping cart icon and:
    * Update the quantity of the cars.


### Deleting Cars From Shopping Cart / Cancel Reservation

* As a logged-in user, I want to be able to delete the cars in the shopping cart or cancel the reservation.
  * When I'm on any page of the site, I can click the shopping cart icon and:
    * Remove the cars from the shopping cart
  * When I'm on the `/users/current/rental` pages:
    * I can cancel a reservation.
