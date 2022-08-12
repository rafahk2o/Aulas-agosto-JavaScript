import axios from "axios";
import { Component } from "react";


class Vitrine extends Component {
    constructor() {
        super();
        this.state = {
            dadosProdutos: []
        }

        this.buscarProdutos = this.buscarProdutos.bind(this)
    }

    async buscarProdutos() {
        await axios.get("https://mocki.io/v1/7566a8a3-5dac-40ef-97e9-00bf90b849fa")
            .then(resposta => {
                const produtos = resposta.data.produtos;
                console.log(produtos);
                this.setState({ dadosProdutos: produtos });
            })
    }

    componentDidMount() {
        this.buscarProdutos();
    }

    render() {
        return (
            <div className="geral">
                {

                    this.state.dadosProdutos.map(produto => (
                        <div className="vitrineone" key={produto.id}>
                            <div className="card">
                            <img className="card-img-top" src={"assets/img/" + produto.img}/>
                            <div className="card-body text-center">
                            <h2 className="card-title">{produto.nome}</h2>
                            <h3 className="card-title">{produto.preco}</h3>
                            <h4 className="card-title">{produto.categoria}</h4>
                            <button className="btn btn-success">Adicionar ao carrinho</button>

                                </div>  
                            </div>


                        </div>
                    ))
                }
            </div>

        )
    }

}

export default Vitrine;