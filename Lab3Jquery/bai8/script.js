$(document).ready(function() {
    $(".subject-name").click(function() {
        $(this).closest("tr").next(".detail-row").fadeIn();
    });

    $(".hide-btn").click(function() {
        $(this).closest(".detail-row").fadeOut();
    });
});