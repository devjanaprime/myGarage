console.log( 'garageScript.js sourced' );
// myCars array
var myCars=[];

<<<<<<< HEAD
var addCar = function( year, make, model, picURL, description ){
  // converted to use user inputs from 0.1
  console.log( 'in addCar' );
  // create new car Object
  var newCar={
    year: document.getElementById( 'yearIn' ).value,
    make: document.getElementById( 'makeIn' ).value,
    model: document.getElementById( 'modelIn' ).value,
    picURL: document.getElementById( 'picURLIn' ).value,
    description: document.getElementById( 'descriptionIn' ).value
  }; // end new car object
  // push into array
  myCars.push( newCar );
  // show cars
  showCars();
  // clear inputs
  document.getElementById( 'yearIn' ).value='';
  document.getElementById( 'makeIn' ).value='';
  document.getElementById( 'modelIn' ).value='';
  document.getElementById( 'picURLIn' ).value='';
  document.getElementById( 'descriptionIn' ).value='';
}; // end addCar

var editCar = function( carIndex ){
  console.log( 'in console:', carIndex );
  console.log( 'editing car:', myCars[ carIndex ] );
  // we're going to cheat here a bit
  // step 1: place the entry's 411 in the input fields
  document.getElementById( 'yearIn' ).value = myCars[ carIndex ].year;
  document.getElementById( 'makeIn' ).value = myCars[ carIndex ].make;
  document.getElementById( 'modelIn' ).value = myCars[ carIndex ].model;
  document.getElementById( 'picURLIn' ).value = myCars[ carIndex ].picURL;
  document.getElementById( 'descriptionIn' ).value = myCars[ carIndex ].description;
  // step 2: remove the car from the array
  removeCar( carIndex );
  // a POC work-around that will fake being able to edit
}; // end editCar

var removeCar = function( carIndex ){
  console.log( 'in removeCar:', carIndex );
  console.log( 'removing car:', myCars[ carIndex ]);
  // splice out record of this index from the array
  myCars.splice(carIndex, 1);
  showCars();
}; // end removeCar

var showCars = function(){
  console.log( 'in showCars');
  // upated from ver 0.3 to output the make/model/year, car image, and description to a div instead of as li in a ul
  // clear the output div
  document.getElementById( 'carsList' ).innerHTML='';
  // for every car in the array...
  for( var i=0; i< myCars.length; i++ ){
    // assemble an output text line for the year/make model
    var outputText0 = '<h3>' + myCars[ i ].year + ' ' + myCars[ i ].make + ' ' + myCars[ i ].model + '</h3>';
    // assemble an output text line for the pic if there is one
    var outputText1 = '<img src="' + myCars[ i ].picURL + '">';
    // assemble an output text line for the description
    var outputText2 = '<p>' + myCars[ i ].description + '<p>';
    // button to remove the current car from the myCars array
    var removeButton = '<button onClick="removeCar( ' + i + ' )";>Remove this car from the Garage</button>';
    // button to edit the current car
    var editButton = '<button onClick="editCar( ' + i + ' )";>Edit this car</button>';
    // append these all to the body
    var outputText = '<div>' + outputText0 + editButton + removeButton + '<br />' + outputText1 + outputText2 + '</div>';
    document.getElementById('carsList').innerHTML+=outputText;
  }; // end for
=======
// converted to JQuery from ver 0.3 of My Garage

$( document ).ready( function(){
  console.log( 'in JQUERY' );
>>>>>>> ver0.51_JQueryRemoveCar

  // target the addCarButton by it's ID (thus the #)
  $( '#addCarButton' ).on( 'click', function(){
    console.log( 'in addCarButton click');
    // create new car Object
    var newCar={
      year: $( '#yearIn' ).val(),
      make: $( '#makeIn' ).val(),
      model: $( '#modelIn' ).val(),
      picURL: $( '#picURLIn' ).val(),
      description: $( '#descriptionIn' ).val()
    }; // end new car object
    // push into array
    myCars.push( newCar );
    // empty inputs
    $( '#yearIn' ).val(''),
    $( '#makeIn' ).val(''),
    $( '#modelIn' ).val(''),
    $( '#picURLIn' ).val(''),
    $( '#descriptionIn' ).val('')
    // show cars
    showCars();
  }); // end addCarButton click

  // click for all of 'removeCar' class
  $(document).on('click', '.removeCar', function(){
    console.log( 'in removeCar class click' );
    // get index of selected car
    var index = $(this).attr( 'carIndex' );
    console.log( 'removing car:', myCars[ index ]);
    myCars.splice( index, 1 );
    showCars();
  });

  var showCars = function(){
    console.log( 'in showCars');
    // upated from ver 0.2 to output an unordered list of cars in garage to DOM
    // not just a cheesy console.log...
    // empty the ul
    $( '#carsList' ).empty();
    // for every car in the array...
    for( var i=0; i< myCars.length; i++ ){
      // assemble an output text line
      var outputText = myCars[ i ].year + ' ' + myCars[ i ].make + ' ' + myCars[ i ].model + ': ' + myCars[ i ].description;
      // add a link to remove the car
      var removeText = '<a href="#" class="removeCar" carIndex=' + i + '>Remove</a>';
      // append new list item to existing ul with remove link
      $( '#carsList' ).append( '<li>' + outputText + ' ' + removeText + '</li>' );
    }; // end for
  }; // end showCars
});
