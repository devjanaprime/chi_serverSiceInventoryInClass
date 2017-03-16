// requires n globals
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var port = 4567;
var index = require( './modules/index.js' );

// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/', index );

// spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
});
