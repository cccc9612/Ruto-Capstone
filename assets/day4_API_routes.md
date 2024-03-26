# API Routes & Endpoints

## `/login`

### Log in page

This page displays a log in form

* `GET /login`
* `POST /login`

## `/signup`

This page displays a signup form.

### Sign up page

* `GET /signup`
* `POST /signup`

## `/`

This page displays two categories of the cars, as well as a navigation bar with login/signup or logout buttons. 

* `GET /`


## `/cars`

This page displays all the cars in the database, with their prices and locations.

* `GET /cars`
* `GET /cars/:id`


## `/reviews`

This page displays ten most recently created albums.

* `GET /reviews`


## `/albums/:id`

This page displays individual album with associated songs and likes, a logged in user can play the songs, as well as like or unlike the songs.

* `GET /albums/:id`
* `POST /songs/:id/like`
* `PUT /albums/:id/add`
* `DELETE /songs/:id/dislike`


## `/users/cars`

This page displays all the cars belong to the logged-in user, it also allows the user to update or delete the cars.

* `GET /users/cars`
* `POST /users/cars/new`
* `PUT /users/cars/:id/update`
* `DELETE /users/albums/:id/delete` 


## `/users/current/songs`

This page displays all the songs belonging to the logged-in user, this page also displays an update, delete, and add songs to album button.

* `GET /users/current`(get current user)
* `GET /users/current/songs`
* `POST /users/current/songs`
* `PUT /users/current/songs/:id/update`
* `DELETE /users/current/songs/:id/delete` 


## `/search/albums`
This page displays the results of the matched albums

* `POST /search/albums`

## `/search/songs`
This page displays the results of the matched songs

* `POST /search/songs`
