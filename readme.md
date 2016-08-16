My Garage
=========

A rolling project that will use many basic technologies (JS, JQuery, AngularJS, SQL, Mongo) that is broken into many branches. We'll create an Array "myCars" which can hold many car Objects.

The Car Object
--------------
* year
* make
* model
* picURL
* description

Versions by branch:
==================
![technologies by version](myGarage.png)

0.1 - console only
------------------
* vanilla JS
* generic CSS file
* all the action is in the console
* adding cars is hard-coded in the JS file

0.2 - basic input
-----------------
* builds off of 0.1
* text input fields
* button for adding the current input to the garage

0.3 - DOM output
----------------
* builds off of 0.2
* uses vanilla JS for DOM output

0.4 - Bootstrap styling
-----------------------
* builds off of 0.3
* uses Bootstrap for styling

0.5 - JQuery output to DOM
--------------------------
* builds off of 0.3
* converted to JQuery

0.6 - JQuery/JSON
----------------
* builds off of 0.5
* loads cars from a JSON file in addition to input from user

0.7 - JQuery/SQL
----------------
* builds off of 0.5
* SQL CRUD for persistent car data

0.8 - Angular output to DOM
---------------------------
* builds off of 0.3
* basic project converted to Angular

0.9 - Angular/SQL
-----------------
* builds off of 0.8
* SQL CRUD for persistent car data

1.0 - Angular/Mongo
-------------------
* builds off of 0.8
* Mongo CRUD for persistent car data