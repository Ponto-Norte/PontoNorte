import '../Trilhas/Trilhas.css';
import Header from '../../components/Header/Header';
import TrilhaSolo from '../../components/TrilhaSolo/TrilhaSolo';
import Footer from '../../components/Footer/Footer';

function Trilhas() {
  return (
    <div id="trilhas">
      <Header />

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

      <div className="tipo">
        <ul>
          <li>
            <p>Trilhas Longas</p>
          </li>
          <li>
            <a href="#">Usar minha localização</a>
          </li>
        </ul>
      </div>

      <section className="espaco">
        <article className="caseTrilha">
          <TrilhaSolo
            foto="/src/assets/wallpaper.jpg"
            nome="Riacho Grande"
            local="Ubatuba"
            previa="Trilha desafiadora em Ubatuba com belas praias, ideal entre maio e agosto."
            distancia={15}
            elevacao={500}
          />

          <TrilhaSolo
            foto="/src/assets/wallpaper.jpg"
            nome="Riacho Grande"
            local="Ubatuba"
            previa="Trilha desafiadora em Ubatuba com belas praias, ideal entre maio e agosto."
            distancia={15}
            elevacao={500}
          />

          <TrilhaSolo
            foto="/src/assets/wallpaper.jpg"
            nome="Riacho Grande"
            local="Ubatuba"
            previa="Trilha desafiadora em Ubatuba com belas praias, ideal entre maio e agosto."
            distancia={15}
            elevacao={500}
          />

          <TrilhaSolo
            foto="/src/assets/wallpaper.jpg"
            nome="Riacho Grande"
            local="Ubatuba"
            previa="Trilha desafiadora em Ubatuba com belas praias, ideal entre maio e agosto."
            distancia={15}
            elevacao={500}
          />

          <TrilhaSolo
            foto="/src/assets/wallpaper.jpg"
            nome="Riacho Grande"
            local="Ubatuba"
            previa="Trilha desafiadora em Ubatuba com belas praias, ideal entre maio e agosto."
            distancia={15}
            elevacao={500}
          />

          <TrilhaSolo
            foto="/src/assets/wallpaper.jpg"
            nome="Riacho Grande"
            local="Ubatuba"
            previa="Trilha desafiadora em Ubatuba com belas praias, ideal entre maio e agosto."
            distancia={15}
            elevacao={500}
          />

          <TrilhaSolo
            foto="/src/assets/wallpaper.jpg"
            nome="Riacho Grande"
            local="Ubatuba"
            previa="Trilha desafiadora em Ubatuba com belas praias, ideal entre maio e agosto."
            distancia={15}
            elevacao={500}
          />

          <TrilhaSolo
            foto="/src/assets/wallpaper.jpg"
            nome="Riacho Grande"
            local="Ubatuba"
            previa="Trilha desafiadora em Ubatuba com belas praias, ideal entre maio e agosto."
            distancia={15}
            elevacao={500}
          />
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default Trilhas;
