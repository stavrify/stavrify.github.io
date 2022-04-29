$(document).ready(function(){
    var delay = 300;

    $("#hamburger").click(function(){
        $("#top").toggleClass('topX');
        $("#mid").toggleClass('midX');
        $("#bottom").toggleClass('bottomX');
        $("nav a").toggleClass('nav-display');
        setTimeout(function() {
            $("nav a").toggleClass('opaque')
        }, delay);
    });
});
