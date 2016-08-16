console.log( 'garageScript.js sourced' );
// myCars array
var myCars=[];

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
}; // end addCar

var showCars = function(){
  console.log( 'in showCars');
  console.log( myCars );
}; // end showCars
