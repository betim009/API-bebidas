import { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [vinhos, SetVinhos] = useState([]);
  const [vodkas, SetVodkas] = useState([]);
  const [incial, SetInicial] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const url = "https://67b7932c2bddacfb270f63a5.mockapi.io/api/v1/vinhos";
      const req = await fetch(url);
      const resposta = await req.json();
      SetVinhos(resposta);
      SetInicial(resposta);

      const url2 = " https://67b7932c2bddacfb270f63a5.mockapi.io/api/v1/Vodkas";
      const req2 = await fetch(url2);
      const resposta2 = await req2.json();
      SetVodkas(resposta2);
    }
    fetchAPI();
  }, []);

  return (
    <div>
      <Header />
      <div className="">
        <div className="">
          <ul className="flex-center">
            <li className="li-item" onClick={() => SetInicial(vodkas)}>
            <img src="src/pages/img/VodkaAbsolut.png" alt=""/>
            </li>
            <li className="li-item" onClick={() => SetInicial(vinhos)}>
              <img src="src/pages/img/VInhoMalbac.png" alt=""/>
            </li>
          </ul>
        </div>
        <div className="grid">
          {incial.map((element) => (
            <div className="card" key={element.nome}>
              <div className="thumb">
                <img src={element.imagem} alt="" />
              </div>
              <div className="texto-card">
                <h4 className="nome-card">{element.nome}</h4>
                <p className="discricao-card">{element.descricao}</p>
                <h4 className="preco-card">{element.preco}</h4>
                <button onClick={() => navigate(`/vinho/${element.id}`)}>
                  {" "}
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
