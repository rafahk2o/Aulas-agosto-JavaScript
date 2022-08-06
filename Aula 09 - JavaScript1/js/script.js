let msg = $("#msg")
let vitrineone = $(".vitrineone")
let vitrinetwo = $(".vitrinetwo")
let vitrinethree = $(".vitrinethree")
let vitrinefor = $(".vitrinefor")
let vitrinefive = $(".vitrinefive")
$.ajax({
    url: "https://mocki.io/v1/70b447cf-a80f-48de-bcbb-ed8afc6dee9e",
    success: (resposta) => {
        const aux = resposta.produtos;
        let listaProdutos = "";
        let listaProdutos2 = "";
        let listaProdutos3 = "";
        let listaProdutos4 = "";
        let listaProdutos5 = "";
        aux.forEach(item => {
            if (item.name == "Blusa Nike") {
                listaProdutos += `<h1>${item.name}</h1>
                                    <p>${item.price}</p>
                                    <p>${item.color}</p>`
            } else if (item.name == "Blusa Adidas") {
                listaProdutos2 += `<h1>${item.name}</h1>
                                    <p>${item.price}</p>
                                    <p>${item.color}</p>`
            } else if (item.name == "Blusa Lacoste") {
                listaProdutos3 += `<h1>${item.name}</h1>
                                    <p>${item.price}</p>
                                    <p>${item.color}</p>`
            } else if (item.name == "Blusa Reserva") {
                listaProdutos4 += `<h1>${item.name}</h1>
                                    <p>${item.price}</p>
                                    <p>${item.color}</p>`
            } else if (item.name == "Blusa Gucci") {
                listaProdutos5 += `<h1>${item.name}</h1>
                                    <p>${item.price}</p>
                                    <p>${item.color}</p>`
            }



            console.log(item.name)

        });
        vitrineone.html(listaProdutos)
        vitrinetwo.html(listaProdutos2)
        vitrinethree.html(listaProdutos3)
        vitrinefor.html(listaProdutos4)
        vitrinefive.html(listaProdutos5)
    }
});







