$( document ).ready( function(){

  $( '#addItemButton' ).on( 'click', function(){
    console.log( 'in addItemButton on click');
  }); // end addItemButton on click

  $( '#searchByNameButton' ).on( 'click', function(){
    console.log( 'in searchByNameButton on click');
  }); // end searchByNameButton on click

  $( '#searchByDescriptionButton' ).on( 'click', function(){
    console.log( 'in searchByDescriptionButton on click');
  }); // end searchByDescriptionButton on click

  $( '#clearSearchButton' ).on( 'click', function(){
    console.log( 'in clearSearchButton on click');
  }); // end clearSearchButton on click

}); // end doc ready
