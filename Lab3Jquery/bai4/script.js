$(document).ready(function() {
    $(".submenu").hide(); // Ẩn tất cả submenu khi tải trang

    $(".menu-item").hover(
        function() {
            $(this).children(".submenu").stop(true, true).slideDown();
        },
        function() {
            $(this).children(".submenu").stop(true, true).slideUp();
        }
    );
});