// requires and globals
var express = require( 'express' );
var router = express.Router();
// the array of our inventory
var allTheThings = [];

// routes
router.get( '/', function( req, res ){
  console.log( 'inventory base get' );
  // return full inventory on this get
  res.send( allTheThings );
}); // end send back all the things

router.post( '/add', function( req, res ){
  // called from addItemButton on click
  console.log( 'in inventory add route:', req.body );
  // add this item to allTheThings
  allTheThings.push( req.body );
  // send back success
  res.send( 200 );
});

router.post( '/searchByName', function( req, res ){
  console.log( 'in searchByName:', req.body );
  // our matches
  var matches = [];
  // loop through allTheThings
  for (var i = 0; i < allTheThings.length; i++) {
    if( allTheThings[i].name.includes( req.body.name ) ){
      // add any name mathes to an array
      matches.push( allTheThings[ i ] );
    } // end if
  } // end for
  // return array
  res.send( matches );
}); //end searchByName

// exports
module.exports = router;
