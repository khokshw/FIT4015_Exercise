$(document).ready(function() {
    $("#searchBox").on("keyup", function() {
        let keyword = $(this).val().toLowerCase();
        let found = false;

        $(".product-item").each(function() {
            let itemText = $(this).text().toLowerCase();
            if (itemText.includes(keyword)) {
                $(this).show();
                found = true;
            } else {
                $(this).hide();
            }
        });

        // Hiển thị thông báo nếu không tìm thấy kết quả
        if (found) {
            $("#notFound").hide();
        } else {
            $("#notFound").show();
        }
    });
});