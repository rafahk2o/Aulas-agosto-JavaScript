

let campoCep = $("#cep");

campoCep.blur(function () {
    var cep = $(this).val();

    if (cep != "") {
        console.log(cep);
        buscaCep(cep)

    } else {
        Swal.fire('Digite o CEP!')
    }

})

function buscaCep(cep) {
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        beforeSend: () => {
            console.log("pesquisando...")
        },

        success: (resposta) => {

            Swal.fire(
                'CEP encontrado!',
                'O endereço buscado já está em tela!',
                'success')
            console.log(resposta);
            $("#retorno").val(resposta.cep);
            $("#retorno2").val(resposta.logradouro);
            $("#retorno3").val(resposta.localidade);
            $("#retorno4").val(resposta.ibge);
           
        },



        error: () => {
            console.log("Deu ruim!!")
        }

    })
}