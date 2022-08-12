import axios from "axios";
import { Component } from 'react';

export default class Carrinho extends Component {

    constructor() {
        super();
        this.state = {
            dadosCarrinho: []
        }

        this.buscarCarrinho = this.buscarCarrinho.bind(this)
    }

    async buscarCarrinho() {
        await axios.get("https://mocki.io/v1/886555e7-956e-4ce3-af25-cc8c6c4760ce")
            .then(response => {
                const carrinho = response.data.produtos;
                console.log(carrinho);
                this.setState({ dadosCarrinho: carrinho });
            })
    }

    componentDidMount() {
        this.buscarCarrinho();
    }

    render() {
        return (
            <div className="geralCarrinho">
                {
                    this.state.dadosCarrinho.map(produto => (
                        <div className="vitrinetwo" key={produto.id}>
                            <h2 className="card-title">{produto.nome}</h2>
                            <div className="vitrinetwo-preco">R${produto.preco}</div>
                            <img className="card-img-top" src={"assets/img/" + produto.img} />
                            <div className="btn-quant"><button className="btn-quant1">-</button>
                                <span>{produto.quantidade}</span>
                                <button className="btn-quant2">+</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

