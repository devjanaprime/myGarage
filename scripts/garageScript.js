console.log( 'garageScript.js sourced' );
// myCars array
var myCars=[];

// converted to JQuery from ver 0.3 of My Garage

$( document ).ready( function(){
  console.log( 'in JQUERY' );

  // target the addCarButton by it's ID (thus the #)
  $( '#addCarButton' ).on( 'click', function(){
    console.log( 'in addCarButton click');
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
  }); // end addCarButton click

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
      // create new list item
      var newListItem = document.createElement( 'li' );
      // create new text node with the output text
      var newTextNode = document.createTextNode( outputText );
      // append text node to list item
      newListItem.appendChild( newTextNode );
      // append new list item to existing ul
      $( '#carsList' ).append( newListItem );
    }; // end for
  }; // end showCars
});
