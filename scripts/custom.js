
$(document).ready(function() {

  //ACCORDION
  $('.accQuestion').click(function() {
    $parent_box = $(this).parent();
    $parent_box.find('.accAnswer').toggleClass('activeAccAnswer');
    $(this).toggleClass('flipButton');
  });
  
});

