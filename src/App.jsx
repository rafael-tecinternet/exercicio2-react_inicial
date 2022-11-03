import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    async function getProdutos() {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();
        setProdutos(dados);
        console.log(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getProdutos();
  }, []);
  return (
    <>
      <article className="container">
        {produtos.map(({ id, title, price, image }) => (
          <div key={id} class="produtos">
            <p>
              <img class="foto-produto" src={image} alt="" />
            </p>
            <h4>{title}</h4>
            <p>
              {price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        ))}
      </article>
    </>
  );
}

export default App;
