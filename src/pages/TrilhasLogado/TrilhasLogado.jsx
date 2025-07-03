import '../TrilhasLogado/TrilhasLogado.css';
import { Link } from 'react-router-dom';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import FooterLogado from '../../components/FooterLogado/FooterLogado';
import CardTrilha from '../../components/CardTrilha/CardTrilha';

function TrilhasLogado() {
  return (
    <>
      <HeaderLogado />
      <div className="pnTrilhasLogadoWallpaper">
        <h1>Sinta a natureza</h1>
      </div>

      <section className="pnTrilhasLogadoPesquisa">
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

        <div className="pnTrilhasLogadoAreaPesquisa">
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

      <div className="pnTrilhasLogadoFiltro">
        <h3>Trilhas Longas</h3>
        <Link className="pnTrilhasLogadoLocal" to="/">
          Usar minha Localização
        </Link>
      </div>

      <section className="pnTrilhasLogadoConteudo">
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
      <FooterLogado />
    </>
  );
}

export default TrilhasLogado;
