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
