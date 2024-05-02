$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:8080/api/dada/films',
        type: 'GET',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
});



$(document).ready(function() {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    $('#add-to-favorites').click(function() {
        $.ajax({
            url: `ссылка_на_сервер/избранное/добавить`,
            type: 'POST',
            data: { id: id },
            success: function(response) {
                alert('Фильм добавлен в избранное!');
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });


    $('#remove-from-favorites').click(function() {
        $.ajax({
            url: `ссылка_на_сервер/избранное/удалить`,
            type: 'DELETE',
            data: { id: id },
            success: function(response) {
                alert('Фильм удален из избранного!');
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});

