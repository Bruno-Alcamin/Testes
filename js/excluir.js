function excluir(x){
    if(confirm("Confirma a exclusão do usuário "+$('button[onclick="excluir('+x+')"').parent().find('span').html()+"?")){
        $.ajax({
            type: 'POST',
            url: 'https://wsphp-bruno-alcamin.c9users.io/deletar',
            data:{
                cod: x
            }
        });
        $('.coment').load('https://wsphp-bruno-alcamin.c9users.io/listar');
    }
}