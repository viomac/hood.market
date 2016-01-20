$(document).ready(function() {
    
});


//SERVICES FILTER

$('.category').click(function(index) {
    category = $(this).attr('category');
    $('#specific-services * [class|=col]').hide();
    $('#specific-services * .'+category).fadeIn("slow");
});

$('.category[category=all]').click(function() {
   $('#specific-services * [class|=col]').fadeIn("slow"); 
});



