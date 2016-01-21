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


// SERVICE CARD MODAL

$('.service-card-btn').click(function() {
    caption = $(this).parents('.thumbnail');
    $('#service-card-modal .service-label').text($(caption).find('.service-name').text());
    $('#service-card-modal .provider-label').text($(caption).find('.provider-name').text()+" /");
    $('#service-card-modal .price-label').text($(caption).find('.price').text());
});

