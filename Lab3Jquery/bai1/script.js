$(document).ready(function(){
    $('#addTask').click(function(){
        let taskText = $('#taskInput').val().trim();
        if (taskText !== '') {
            let taskItem = $('<li></li>').text(taskText);
            let deleteBtn = $('<button>Xóa</button>').click(function(){
                $(this).parent().remove();
            });
            taskItem.append(deleteBtn);
            taskItem.click(function(){
                $(this).toggleClass('completed');
            });
            $('#taskList').append(taskItem);
            $('#taskInput').val('');
        }
    });
});