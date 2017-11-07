$(document).ready(function(){
    $('.recipe-container').hover(function(){
        //This is onMouseIn event
        $(this).find('.recipe-description').fadeIn(350);
    }, 
    function(){
        //This is onMouseOut event
        $(this).find('.recipe-description').fadeOut(350);
    });
});
$(document).ready(function() {
    $(".expanded").hide();
});
