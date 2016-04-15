function listar(){
    $.ajax({
        type: 'GET',
        url: 'https://wsphp-bruno-alcamin.c9users.io/listar'
    }).done(function(e){
        $('.coment').append(e);
    });
}