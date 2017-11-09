$(document).ready(function(){
    $('.recipe-container').hover(function(){
        //This is onMouseIn event
        $(this).find('.recipe-description').fadeIn(350);
    }, 
    function(){
        //This is onMouseOut event
        $(this).find('.recipe-description').fadeOut(350);
    });
    $(".expanded").hide();

    $(".expanded a, .collapsed a").click(function(eve) {
        var $container = $(this).parents("div");
        eve.preventDefault();
        $container.children(".expanded, .collapsed").toggle();
    });
    $( window ).resize(function() {
        var new_width = $(".recipe-description").prev().width()
        $(".recipe-description").width(new_width)
    });
    var new_width = $(".recipe-description").prev().width()
    $(".recipe-description").width(new_width)
});