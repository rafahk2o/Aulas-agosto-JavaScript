// let vitrineone = $("#vitrineone");
let produtoLista = $("#produto-lista");
let produtoCart = $("#produto-cart");
let vitrineTwo = $(".vitrinetwo");
let inputQuant = $("#input-quant");
let cep = $("#cep");
function produtoIndex() {
    $.ajax({
        url: "https://mocki.io/v1/7566a8a3-5dac-40ef-97e9-00bf90b849fa",
        success: (lista) => {
            const produtos = lista.produtos;
            let vitrine = "";
            let posicao = 0;
            while (posicao < produtos.length) {
                vitrine += `<div class="vitrineone">`;
                vitrine += `<div class="card">
            <img class="card-img-top" src="img/${produtos[posicao].img}">
            <div class="card-body text-center">
            <h5 class="card-title">${produtos[posicao].nome}</h5>`;
                produtos[posicao].categoria.forEach(categoria => {
                    if (categoria == "women")
                        vitrine += `<span class="badge bg-danger me-2>${categoria}</span>"`;
                    else if (categoria == "man")
                        vitrine += `<span class="badge bg-primary me-2>${categoria}</span>"`;
                    else if (categoria == "shoes")
                        vitrine += `<span class="badge bg-info me-2>${categoria}</span>"`;
                    else if (categoria == "t-shirt")
                        vitrine += `<span class="badge bg-light me-2>${categoria}</span>"`;

                });

                const preco = produtos[posicao].preco;
                vitrine += `<p class="card-text">${preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            <button class="btn btn-success">Adicionar ao carrinho</button>`;
                vitrine += `</div>
      </div>
    </div>`
                posicao++;
            }
            produtoLista.html(vitrine)
        }
    })

}


function carrinho() {
    $.ajax({
        url: "https://mocki.io/v1/886555e7-956e-4ce3-af25-cc8c6c4760ce ",
        success: (listaCarrinho) => {
            // IMPORTANTE!!! VARI??VEL ACUMULADORA DEVE SER DECLARADA FORA DO LA??O DE REPETI????O!!!
            let produtos2 = "";
            listaCarrinho.produtos.map(produto => {
                produtos2 += `<div class="vitrinetwo">
                <h2 class="card-title">${produto.nome}</h2>
                <div class="vitrinetwo-preco">R$ ${produto.preco}</div>
                <img class="card-img-top" src="img/${produto.img}">
                <div class="btn-quant"><button class="btn-quant1">-</button>
                <span>${produto.quantidade}</span>
                <button class="btn-quant2">+</button>
                </div>
                </div>`
                console.log(produtos2)
            })

            produtoCart.html(produtos2)
        }
    })
}

cep.on("keyup", () => {
    if (cep.val().length == 8){
        $.ajax({
            url: `https://viacep.com.br/ws/${cep.val()}/json/`,
            success: (dadosCep) => {
                console.log(dadosCep)
                // cep.prop('disabled', true)
                $("#retorno").val(dadosCep.cep);
            $("#retorno2").val(dadosCep.logradouro);
            $("#retorno3").val(dadosCep.localidade);
            $("#retorno4").val(dadosCep.cidade);
            $("#retorno5").val(dadosCep.bairro);
            $("#retorno6").val(dadosCep.uf);
            }
        })
    }
})



$('#reset-val').click(function() {
    $('#retorno').val("");
})






