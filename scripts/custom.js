
$(document).ready(function() {

  //ACCORDION
  $('.accQuestion').click(function() {
    $parent_box = $(this).parent();

    // Toggle accordion show/hide
    $parent_box.find('.accAnswer').toggleClass('activeAccAnswer');
    $(this).toggleClass('flipButton');

    // Hide other accordions
    $('.accQuestion').not($(this)).removeClass('flipButton');
    $('.accQuestion').not($(this)).next().removeClass('activeAccAnswer');

  });
  
});

