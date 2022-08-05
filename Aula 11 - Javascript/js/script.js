let vitrineone = $("#vitrineone");
let produtoLista = $("#produto-lista");


$.ajax({
    url: "http://10.24.78.52:5000/api/produtos",
    success: (lista) => {
        const produtos = lista.produtos;
        let vitrine = "";
        let posicao = 0;
        while (posicao < produtos.length) {
            vitrine += `<div class="vitrineone">`;
                


        }
        produtoLista.html(vitrine)
    }
})
