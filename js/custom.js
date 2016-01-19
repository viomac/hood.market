$(document).ready(function() {
    //alert("pagina con js");
    
    /*$('.services-list a').each(function(index, element) {
        alert(index+"element: "+element.textContent);
    }); */
    
    //alert($('[category]').length);
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