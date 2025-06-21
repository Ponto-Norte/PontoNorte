import '../CardTrilha/CardTrilha.css';
import claro from '../../assets/wallpaper.jpg';
import { Link } from 'react-router-dom';

function CardTrilha() {
  return (
    <article className="pnCardTrilhasFoto">
      <img id="pnCardTrilhaFoto" src={claro} alt="" />
      <section className="pnCardTrilhasContainer">
        <div className="pnCardTrilhasDados">
          <h3>Trilha Riacho Grande</h3>
          <ul className="pnCardTrilhasLocalizacao">
            <li>Ubatuba</li>

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
            <p>
              Trilha desafiadora em Ubatuba com belas praias, ideal entre maio e
              agosto.
            </p>
          </div>
          <ul className="pnCardTrilhasDistancia">
            <li>
              Distância <span>15,8Km ida e volta</span>{' '}
            </li>
            <li>
              Elevação <span>599 metros</span>
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
