
let posicao = 0;
for (let posicao = 0; posicao < lista.produtos.length; posicao++) {
    console.log("---- FOR ----")
    console.log(lista.produtos[posicao].nome);
    console.log(lista.produtos[posicao].preco);
    
}
while (posicao < lista.produtos.length) {
    console.log("---- WHILE ----")
    console.log(lista.produtos[posicao].nome);
    console.log(lista.produtos[posicao].preco);
    posicao++;
}
lista.produtos.map(produto => {
    console.log("---- MAP ----")
    console.log(produto.nome);
    console.log(produto.preco);
});
lista.produtos.forEach(produto => {            
    console.log("---- FOREACH ----")
    console.log(produto.nome);
    console.log(produto.preco);
});