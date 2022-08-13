import axios from "axios";


export default function FormularioCep() {
    return (

        <div id="retorno-cep">
            <fieldset><legend>Endereço de entrega</legend>
                <div className="retorno-cep1">
                    <label htmlFor="cep">CEP</label>
                    <input type="text" name="cep" id="cep" maxLength="8" onKeyUp={() => buscaCep()} required />
                    <label>Rua</label><input type="text" id="retorno2" />
                    <label>Cidade</label><input type="text" id="retorno3" />
                </div>
                <div className="retorno-cep2">
                    <div className="retorno-cep21">
                        <label>Bairro</label><input type="text" id="retorno5" />
                    </div>
                    <div className="retorno-cep22">
                        <label>UF.:</label><input type="text" id="retorno6" />
                    </div>

                </div>
            </fieldset>
        </div>

    )

}



function buscaCep() {
    const cep = document.getElementById("cep");
    if (cep.value.length == 8) {
        axios.get(`https://viacep.com.br/ws/${cep.value}/json/`)
            .then((resposta) => {
                const dadosEndereco = resposta.data;
                document.getElementById("retorno2").value = dadosEndereco.logradouro;
                document.getElementById("retorno3").value = dadosEndereco.localidade;
                document.getElementById("retorno5").value = dadosEndereco.bairro;
                document.getElementById("retorno6").value = dadosEndereco.uf;
                console.log(dadosEndereco)

            })
    }


}