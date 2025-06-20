import '../Trilhas/Trilhas.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TrilhaSolo from '../../components/TrilhaSolo/TrilhaSolo'

function Trilhas() {
  return (
    <div id="trilhas">
      <Header />
      <section>
        <div className="pn-wallpaper-trilhas">
          <h1>Sinta a natureza</h1>
        </div>

        <section className="pn-buscar-container">
          <div className="pn-position">
            <div className="pn-buscar-trilhas">
              <ul>
                <li>
                  <a href="#">Trilhas Longas</a>
                </li>
                <li>
                  <a href="#">Trilhas Médias</a>
                </li>
                <li>
                  <a href="#">Trilhas Curtas</a>
                </li>
              </ul>

              <div className="pn-pesquisa">
                <input
                  id="pn-input"
                  type="text"
                  className="pn-pesquisa-trilha"
                  placeholder="Encontre sua trilha"
                />
                <button id="pn-button">Buscar</button>
              </div>
            </div>
          </div>
        </section>

        <div className="pn-opcao">
          <ul>
            <li>
              <h2>Trilhas Longas</h2>
            </li>
            <li>
              <a href="#">Usar minha localização</a>
            </li>
          </ul>
        </div>

        <article className="pn-trilhas">
         <TrilhaSolo foto="" local="Ubatuba" previa="awidjwoadpajdoaldpawkdawdawkdoawkdo" distancia="15 km" elevacao=" 500m" />
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default Trilhas;
