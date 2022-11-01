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
      <article>
        {produtos.map(
          ({ id, titulo, preco }) => (
            (id = { id }), (titulo = { titulo }), (preco = { preco })
          )
        )}
      </article>
    </>
  );
}

export default App;
