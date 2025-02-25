$(document).ready(function(){
    $("#registerForm").submit(function(event){
        let isValid = true;
        
        // Kiểm tra tên
        if ($("#name").val().trim() === "") {
            $("#nameError").show();
            isValid = false;
        } else {
            $("#nameError").hide();
        }
        
        // Kiểm tra email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test($("#email").val().trim())) {
            $("#emailError").show();
            isValid = false;
        } else {
            $("#emailError").hide();
        }
        
        // Kiểm tra mật khẩu
        if ($("#password").val().length < 6) {
            $("#passwordError").show();
            isValid = false;
        } else {
            $("#passwordError").hide();
        }
        
        if (!isValid) {
            event.preventDefault(); // Ngăn chặn gửi form nếu có lỗi
        }
    });
});