$(document).ready(function() {
    //COLOUR CHANGER
    $(".open-icon").click(function() {
        $('.color-changer-area').animate({
            'left': '-100px'
        }, 500);
        $('.close-icon').toggle(1000);

    });
    $('.icon-header .fa').click(function() {
        $('.close-icon').toggle(1000);
        $('.color-changer-area').animate({
            'left': '0'
        }, 500);
    });

    //purple
    $("#purple").click(function() {
        $(":root").css("--addColor", "purple");

    });
    //red
    $("#red").click(function() {
        $(":root").css("--addColor", "red");

    });
    //blueviolet
    $("#blueviolet").click(function() {
        $(":root").css("--addColor", "blueviolet");
    });
    //blue
    $("#blue").click(function() {
        $(":root").css("--addColor", "blue");
    });
    //goldenrod
    $("#goldenrod").click(function() {

        $(":root").css("--addColor", "goldenrod");
    });
    //magenta
    $("#magenta").click(function() {
        $(":root").css("--addColor", "magenta");
    });
    //yellowgreen
    $("#yellowgreen").click(function() {
        $(":root").css("--addColor", "yellowgreen");
    });
    //orange
    $("#orange").click(function() {
        $(":root").css("--addColor", "orange");
    });
    //green
    $("#green").click(function() {
        $(":root").css("--addColor", "green");
    });
    //yellow
    $("#yellow").click(function() {
        $(":root").css("--addColor", "#ffb400");
    });
});