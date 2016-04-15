$(main);
function main(){
    $('#form-mgs').submit(function(){
    $.ajax({
        type: 'POST',
        url: 'https://wsphp-bruno-alcamin.c9users.io/insert',
        data:{
            nome: $('input[name="nome"]').val()    
        }
    }).done(function(e){
        $('.coment').append(e);
    });
    $('input[name="nome"]').val(" ");
    return false;
    });
}
            