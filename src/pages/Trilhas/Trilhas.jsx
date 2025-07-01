import '../Trilhas/Trilhas.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardTrilha from '../../components/CardTrilha/CardTrilha';

function Trilhas() {
  return (
    <>
      <Header />
      <div className="pnTrilhasWallpaper">
        <h1>Sinta a natureza</h1>
      </div>

      <section className="pnTrilhasPesquisa">
        <div>
          <ul>
            <li>
              <Link id="pnTeste" to="/">
                <p> Trilhas Longas</p>
              </Link>
            </li>
            <li>
              <Link id="pnTeste" to="/">
                <p>Trilhas Médias</p>
              </Link>
            </li>
            <li>
              <Link id="pnTeste" to="/">
                <p>Trilhas Curtas</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="pnTrilhasAreaPesquisa">
          <input
            type="text"
            placeholder="Digite o nome da sua Trilha"
            className="pnTrilhaBarraPesquisa"
          />
          <button type="button" className="pnBotaoBuscarGuias">
            Buscar
          </button>
        </div>
      </section>

      <div className="pnTrilhasFiltro">
        <h3>Trilhas Longas</h3>
        <Link className="pnTrilhasLocal" to="/">
          Usar minha Localização
        </Link>
      </div>

      <section className="pnTrilhasConteudo">
        <CardTrilha
          titulo="Pico do mirante"
          local="Paranapiacaba"
          texto=" É uma trilha fácil de ser percorrida, que acompanha a encosta da serra por dentro da mata."
          distancia="3.01Km"
          altura="816m"
        />

        <CardTrilha
          titulo="Pico do mirante"
          local="Paranapiacaba"
          texto=" É uma trilha fácil de ser percorrida, que acompanha a encosta da serra por dentro da mata."
          distancia="3.01Km"
          altura="816m"
        />

        <CardTrilha
          titulo="Pico do mirante"
          local="Paranapiacaba"
          texto=" É uma trilha fácil de ser percorrida, que acompanha a encosta da serra por dentro da mata."
          distancia="3.01Km"
          altura="816m"
        />
      </section>
      <Footer />
    </>
  );
}

export default Trilhas;
