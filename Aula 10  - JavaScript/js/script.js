let retorno = $("#retorno")
let retorno2 = $("#retorno2")
let retorno3 = $("#retorno3")
let retorno4 = $("#retorno4")

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
            let dados = `<p>CEP: ${resposta.cep}</p>`;
            retorno.html(dados);
            let dados2 = `<p>Logradouro: ${resposta.logradouro}</p>`;
            retorno2.html(dados2);
            let dados3 = `<p>Localidade: ${resposta.localidade}</p>`;
            retorno3.html(dados3);
            let dados4 = `<p>IBGE: ${resposta.ibge}</p>`;
            retorno4.html(dados4);
        },



        error: () => {
            console.log("Deu ruim!!")
        }

    })
}