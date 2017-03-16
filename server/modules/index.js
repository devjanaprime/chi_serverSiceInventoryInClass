// requries and globals
var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );

// routes
router.get( '/', function( req, res ){
  console.log( 'base url hit in index.js router' );
  res.sendFile( path.resolve( 'server/public/views/index.html' ) );
}); // end base url

// exports
module.exports = router;
