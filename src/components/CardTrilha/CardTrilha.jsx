import '../CardTrilha/CardTrilha.css';
import { Link } from 'react-router-dom';

function CardTrilha({ titulo, local, texto, distancia, altura, imagem }) {
  return (
    <article className="pnCardTrilhasFoto">
      <img id="pnCardTrilhaFoto" src={imagem} alt="" />
      <section className="pnCardTrilhasContainer">
        <div className="pnCardTrilhasDados">
          <h3>{titulo}</h3>
          <ul className="pnCardTrilhasLocalizacao">
            <li id="tamanho">{local}</li>

            <li id="CardAvaliacao">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/30/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/30/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/30/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/30/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/30/star--v1.png"
                alt="star--v1"
              />
            </li>
          </ul>

          <div className="pnCardTrilhasPrevia">
            <p>{texto}</p>
          </div>
          <ul className="pnCardTrilhasDistancia">
            <li>
              Distância <span>{distancia} ida e volta</span>{' '}
            </li>
            <li>
              Elevação <span>{altura} metros</span>
            </li>
          </ul>

          <Link id="pnCardTrilhasBotao" to="/">
            Conhecer
          </Link>
        </div>
      </section>
    </article>
  );
}

export default CardTrilha;
