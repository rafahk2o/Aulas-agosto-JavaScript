
let lista = document.querySelector(".lista");
let formFunc = document.getElementById("form-cadastro");
let nome = [];
let func = [];
let empresa = [];
let salFunc = [];



formFunc.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formFunc.nome.value == "") {
        alert("Preencha o nome!")
    } else if (formFunc.func.value == "") {
        alert("Preencha o cargo!")
    } else if (formFunc.empresa.value == "") {
        alert("Preencha o nome da empresa!")
    } else if (formFunc.salFunc.value == "") {
        alert("Preencha o salário do funcionário!")
    } else {
        alert("Dados Salvos!!!")
    }
    nome.push(formFunc.nome.value);
    func.push(formFunc.func.value);
    empresa.push(formFunc.empresa.value);
    salFunc.push(formFunc.salFunc.value);


    gerarLista();
});

function gerarLista() {
    let auxLista = "";
    for (let posicao = 0; posicao < nome.length; posicao++) {
        auxLista += `<h3>DADOS DO FUNCIONÁRIO</h3>
          <p>Nome: ${nome[posicao]}</p>
          <p>Cargo: ${func[posicao]}</p>
          <p>Empresa: ${empresa[posicao]}</p>
          <p>Salário: ${salFunc[posicao]}</p>`

    }

    lista.innerHTML = auxLista;
}







