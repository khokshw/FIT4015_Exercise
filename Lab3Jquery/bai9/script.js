$(document).ready(function(){
    $(".color-box").click(function(){
        let selectedColor = $(this).attr("data-color");
        $("body").css("background-color", selectedColor);
        $("#colorCode").text(selectedColor);
    });
});