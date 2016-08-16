console.log( 'garageScript.js sourced' );
// myCars array
var myCars=[];

var addCar = function( year, make, model, picURL, description ){
  console.log( 'in addCar:', year, make, model, picURL, description );
  // create new car Object
  var newCar={
    year: year,
    make: make,
    model: model,
    picURL: picURL,
    description: description
  }; // end new car object
  // push into array
  myCars.push( newCar );
}; // end addCar

var showCars = function(){
  console.log( 'in showCars');
  console.log( myCars );
}; // end showCars

addCar( 1988, 'Mercedes', '300e', 'http://mercedesforum.com/forum/members/arctic1-41283-albums-my-benz-s-59-picture-1988-300e-diamond-blue-metallic-my-first-320.jpg', 'It had headlight windshield wipers' );
addCar( 1992, 'Ford', 'E350', 'https://upload.wikimedia.org/wikipedia/commons/8/88/83-91_Ford_Club_Wagon.jpg', 'Former work van for HVAC company. Added orange shag carpet, wood paneling, custom lights, and named it "Hope"' );
addCar( 2000, 'Dodge', 'Ram Van', 'http://gomotors.net/photos/1e/7e/2000-dodge-ram-van-1500-maxi-van-in-corona-california-for-sale_46677.jpg', 'Purple carpet with wood paneling.' );
addCar( 2005, 'Chrysler', 'PT Cruiser', 'http://images.gtcarlot.com/pictures/14315360.jpg', 'You can remove the seats!' );
addCar( 2012, 'Kia', 'Soul', 'http://www.kiasoulforums.com/attachments/owners-photo-gallery/605d1248154024-dune-soul-soul-1.jpg', 'Could change the color of the interior lights. Though an SUV, was easy to park');
addCar( 2015, 'Volkswagon', 'Jetta', 'http://images.dealerfire.com/media/websites/2000/content/2015-Volkswagen-Jetta-B2.jpg?s=89164', 'Got the turbo model!' );
showCars();
