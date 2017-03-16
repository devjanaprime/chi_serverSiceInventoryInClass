$( document ).ready( function(){

  $( '#addItemButton' ).on( 'click', function(){
    console.log( 'in addItemButton on click');
    // get user input
    // assemble into object
    var objectToSend = {
      name: $( '#nameInAdd' ).val(),
      description: $( '#descriptionInAdd' ).val()
    }; // end objectToSend
    // ajax post the object to server (/inventory/add)
    $.ajax({
      type: 'POST',
      url: '/inventory/add',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from add with:', response );
        if( response == 'OK' ){
          // update display
          getInventory();
        }
        else{
          alert( 'error adding item' );
        }
      }
    });
  }); // end addItemButton on click

  $( '#clearSearchButton' ).on( 'click', function(){
    console.log( 'in clearSearchButton on click');
    // empty the inputs
    $( '#nameInSearch' ).val('');
    $( 'descriptionInSearch' ).val('');
    // get all the things
    getInventory();
  }); // end clearSearchButton on click

  var displayInventory = function( items ){
    console.log( 'in displayInventory');
    // empty output
    $( '#outputDiv' ).empty();
    // loop through items
    for (var i = 0; i < items.length; i++) {
      // append them to the outputDiv
      $( '#outputDiv' ).append( '<p><b>' + items[i].name + '</b>: ' + items[i].description + '</p>' );
    } // end for
  }; // end displayInventory

  var getInventory = function(){
    console.log( 'in getInventory' );
    // make an ajax get call to /inventory
    $.ajax({
      type: 'GET',
      url: '/inventory',
      success: function( response ){
        console.log( 'back from inventory with:', response );
        // display the inventory on DOM
        displayInventory( response );
      }
    }); // end ajax
  }; // end getInventory

  $( '#searchByDescriptionButton' ).on( 'click', function(){
    console.log( 'in searchByDescriptionButton on click');
  }); // end searchByDescriptionButton on click

  $( '#searchByNameButton' ).on( 'click', function(){
    console.log( 'in searchByNameButton on click');
    // get user input
    // assemble into object
    var objectToSend = {
      name: $( '#nameInSearch' ).val()
    }; // end objectToSend
    console.log( 'sending:', objectToSend );
    // ajax call to inventory/searchByName
    $.ajax({
      type: 'POST',
      url: 'inventory/searchByName',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from search with:', response );
        // update display
        displayInventory( response );
      }
    });
  }); // end searchByNameButton on click

  getInventory();
}); // end doc ready
