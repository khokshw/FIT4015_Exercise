$(document).ready(function(){
    let time = 10;
    let abc;

    $("#start").click(function(){
        time = 10;
        $("#countdown").text(time);
        abc = setInterval(function(){
            time--;
            $("#countdown").text(time);
            if (time <= 0) {
                clearInterval(abc);
                $("#countdown").text("Thời gian đã hết");
            }
        }, 1000);
    });
});