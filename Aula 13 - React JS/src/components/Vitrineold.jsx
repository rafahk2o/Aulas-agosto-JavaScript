import axios from "axios";
import { useEffect, useState } from "react";

function Vitrine() {
  const [dataProdutos, setDataProdutos] = useState(null);

  useEffect(() => {
    axios.get("https://mocki.io/v1/7566a8a3-5dac-40ef-97e9-00bf90b849fa")
      .then((resposta) => setDataProdutos(resposta.data))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div className="vitrineone">
      {
        dataProdutos.produtos.map(produto => (
          <h3>{produto.nome}</h3>
        ))
      }
    </div>
  )
}

export default Vitrine;






