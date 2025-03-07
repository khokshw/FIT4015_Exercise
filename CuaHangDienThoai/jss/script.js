// Banner chuyển sau mỗi 3 giây
let images = ['Banner1', 'Banner2', 'Banner3', 'Banner4', 'Banner5', 'Banner6'];
let bannerShower = 0;

function slideBanner() {
    let imgshow = document.querySelector('img');
    bannerShower = (bannerShower + 1) % images.length;
    imgshow.src = `images/${images[bannerShower]}.png`;
}

setInterval(slideBanner, 3000);
// Tìm kiếm sản phẩm
$(document).ready(function() {
    $('#searchInput').on('input', function() {
        let keyboard = $(this).val().toLowerCase();
        let Results = false;

        $('.product').each(function() {
            let productName = $(this).find("h3").text().toLowerCase(); // Lấy tên sản phẩm từ thẻ h3
            if (productName.includes(keyboard)) {
                $(this).show();
                Results = true;
            } else {
                $(this).hide();
            }
        });

        // Hiển thị hoặc ẩn thông báo khi không có kết quả
        $("#message").text(Results ? "" : "Không tìm thấy sản phẩm");
    });
});