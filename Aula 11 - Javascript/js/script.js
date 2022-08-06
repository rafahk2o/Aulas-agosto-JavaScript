let vitrineone = $("#vitrineone");
let produtoLista = $("#produto-lista");
let product = $(".product");


$.ajax({
    url: "http://10.24.78.52:5000/api/produtos",
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

function carrinho() {
    $.ajax({
        url: "http://10.24.78.52:5000/api/carrinho",
        success: (listaCarrinho) => {
            listaCarrinho.produtos.map(produto => {
                const produto1 = listaCarrinho;
               let produtos2 = "";
               produtos2 += `<div class="product">
               <h5 class="card8-title">${produto1.nome}</h5>
               </div>`;
               




                console.log(produto.nome)
            })
             
        }
    })
}
