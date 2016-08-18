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
      year: $( '#yearIn' ).val(),
      make: $( '#makeIn' ).val(),
      model: $( '#modelIn' ).val(),
      picURL: $( '#picURLIn' ).val(),
      description: $( '#descriptionIn' ).val()
    }; // end new car object
    // send object to server to save to database
    $.ajax({
      url : "/addCar",
      type: "POST",
      data : newCar,
      success: function( data )
      {
        //get cars from DB
        getCars();
      },
      error: function()
      {
        // problem with AJAX POST
        console.log( 'error with AJAX POST' );
      }
    });
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

  // click for all of 'editCar' class
  $( document ).on('click', '.editCar', function(){
    console.log( 'in editCar class click' );
    // get index of selected car
    var index = $(this).attr( 'carIndex' );
    console.log( 'editing car:', myCars[ index ]);
    // set inputs to this car's info
    $( '#yearIn' ).val( myCars[ index ].year );
    $( '#makeIn' ).val( myCars[ index ].make );
    $( '#modelIn' ).val( myCars[ index ].model );
    $( '#picURLIn' ).val( myCars[ index ].picURL );
    $( '#descriptionIn' ).val( myCars[ index ].description );
    // remove from array
    myCars.splice( index, 1 );
    showCars();
  });

  var getCars =function(){
    console.log( 'in getCars' );
    $.ajax({
      url:'/getCars',
      type: 'GET',
      success: function( data ){
        console.log( 'success reading cars from DB:', data );
        // push data back into the myCars array
        myCars=data;
        // show cars
        showCars();
      },
      error: function(){
        console.log( 'error reading cars from DB');
      }
    });
  };

  // click for all of 'removeCar' class
  $( document ).on('click', '.removeCar', function(){
    console.log( 'in removeCar class click' );
    // get index of selected car
    var index = $(this).attr( 'carIndex' );
    console.log( 'removing car:', myCars[ index ]);
    // call to server and tell it to remove this car
    $.ajax({
      url: '/removeCar',
      type: 'DELETE',
      data: myCars[ index ],
      success: function( data ){
        console.log( 'successfully removed car' );
        getCars();
      },
      error: function(){
        console.log( 'error removing car from DB' );
      } // end error
    });
  });

  var showCars = function(){
    console.log( 'in showCars', myCars );
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
      // add a link to edit the car
      var editText = '<a href="#" class="editCar" carIndex=' + i + '>Edit</a>';
      // append new list item to existing ul with remove link
      $( '#carsList' ).append( '<li>' + outputText + ' ' + editText + ' ' + removeText + '</li>' );
    }; // end for
  }; // end showCars
  // get cars on page load
  getCars();
});
