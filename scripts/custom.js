$( document ).ready( function() {

  //ACCORDION
  $( '.accQuestion' ).click( function() {
    $parent_box = $( this ).parent();
    $parent_box.find( '.accAnswer' ).toggleClass( 'activeAccAnswer' ); // Toggle accordion show/hide
    $( this ).toggleClass( 'flipButton' ); // Toggle accordion show/hide icon
    $( '.accQuestion' ).not( $( this ) ).removeClass( 'flipButton' ); // Hide other accordions
    $( '.accQuestion' ).not( $( this ) ).next().removeClass( 'activeAccAnswer' ); // Hide other accordions
  } );

} );
