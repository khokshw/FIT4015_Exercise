$(document).ready(function(){
    $(".thumbnail").click(function(){
        let imgSrc = $(this).attr("src").replace("100x100", "400x400");
        $("#largeImage").attr("src", imgSrc);
        $("#largeImageContainer").fadeIn(500);
    });
    
    $("#close").click(function(){
        $("#largeImageContainer").fadeOut(500);
    });
});