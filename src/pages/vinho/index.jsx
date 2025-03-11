
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useParams } from "react-router-dom";
import "./bebida.css";


export default function Vinho() {
  const [bebida, SetBebida] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchAPI() {
      const url = `https://67b7932c2bddacfb270f63a5.mockapi.io/api/v1/vinhos/${params.id}`;
      const req = await fetch(url);
      const resposta = await req.json();
      SetBebida(resposta);
      console.log(resposta);
    }
    fetchAPI();
  }, []);
  return (
    <>
      <Header />
      <div className="card-1" key={bebida.nome}>
        <div className="thumb-1">
          <img className="img-1" src={bebida.imagem} alt="" />
        </div>
        <div className="texto-1">
          <h4 className="nome-1">{bebida.nome}</h4>
          <p className="descricao-1">{bebida.descricao}</p>
          <h4  className="preco-1">{bebida.preco}</h4>
          <button className="botao-1">Comprar</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
