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
  // clear inputs
  document.getElementById( 'yearIn' ).value='';
  document.getElementById( 'makeIn' ).value='';
  document.getElementById( 'modelIn' ).value='';
  document.getElementById( 'picURLIn' ).value='';
  document.getElementById( 'descriptionIn' ).value='';
}; // end addCar

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
    // append these all to the body
    var outputText = '<div>' + outputText0 + outputText1 + outputText2 + '</div>';
    document.getElementById('carsList').innerHTML+=outputText;
  }; // end for

}; // end showCars
