var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var app = express();
var pg = require('pg');
// using default port of 8080 if no env.PORT
var port = process.env.PORT || 8080;
// default postgress port is 5432
// using a database named "myGarage" on default port of 5432
var connectionString  = 'postgres://localhost:5432/myGarage';
// in the db there is a table named "cars" with the following columns:
// id, year (int), make (varchar32), model(varchar32), picURL(text), description(text)
// app uses
app.use( express.static( './public' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended: true} ) );
// spin up server
var server = app.listen(port,function(){
   var port = server.address().port;
   console.log( 'server up on port',port );
});

// base url
app.get( '/', function( req, res ) {
  console.log( 'in base url' );
  res.sendFile( './views/index.html' );
});

// add a new car to db
app.post( '/addCar', function( req, res ){
  console.log( 'in addCar:', req.body );
  pg.connect( connectionString, function( err, client, done ) {
    if( err ){
      // if there was an error log it
      console.log( err );
    }
    else{
      // if no error proceed
      client.query( 'INSERT INTO cars( year, make, model, picURL, description ) values( $1, $2, $3, $4, $5 )', [ req.body.year, req.body.make, req.body.model, req.body.picURL,  req.body.description ] );
      res.send( true );
    }
  }); // end connect
});

// get cars from db
app.get( '/getCars', function( req, res ){
  console.log( 'in getCars' );
  pg.connect( connectionString, function( err, client, done ) {
    if( err ){
      // if there was an error log it
      console.log( err );
    } // end connection error
    else{
      // if no error proceed
      // get all records from cars table and hold in var named "query"
      var query = client.query( 'SELECT * from cars' );
      // an array to hold our results
      var results = [];
      query.on( 'row', function( row ) {
        // push each row into the results array
        results.push( row );
      }); // end row
      // close connection
      query.on( 'end', function() {
        // close up shop when at end
        done();
        // send back results as a json
        return res.json( results );
      }); // end onEnd
    } // end no connection error
  }); // end connect
});

// removeCar by id
app.delete( '/removeCar', function( req, res ){
  console.log( 'in removeCar', req.body );
  pg.connect( connectionString, function( err, client, done ){
    if( err ){
      console.log( err );
    }
    else{
      client.query( 'DELETE FROM cars WHERE id=' + req.body.id );
      done();
      res.send( true );
    } //end no error connecting
  });
});

app.put( '/editCar', function( req, res ){
  console.log( 'in editCar:', req.body );
  pg.connect( connectionString, function( err, client, done ){
    if( err ){
      console.log( err );
    } // error!
    else{
      var newQuery = "UPDATE cars SET year='" + req.body.year + "', make='" + req.body.make + "', model='" + req.body.model + "', description='" + req.body.description + "' WHERE id='" + req.body.id + "'";
      console.log( newQuery );
      client.query( newQuery );
      done();
      res.send( true );
    } // no error
  }); // end pg connect
});
