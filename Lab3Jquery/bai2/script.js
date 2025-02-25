$(document).ready(function(){
    let images = $(".slide");
    let index = 0;
    let colors = ["#000000", "#0000FF", "#880000"];

    function changeImage(nextIndex) {
        images.eq(index).fadeOut(500, function(){
            index = nextIndex;
            images.eq(index).fadeIn(500);
            $("body").css("background", colors[index]);
        });
    }

    $("#next").click(function(){
        let nextIndex = (index + 1) % images.length;
        changeImage(nextIndex);
    });

    $("#prev").click(function(){
        let prevIndex = (index - 1 + images.length) % images.length;
        changeImage(prevIndex);
    });
});