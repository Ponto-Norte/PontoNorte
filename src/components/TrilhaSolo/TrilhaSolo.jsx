import '../TrilhaSolo/TrilhaSolo.css';

function Trilha({ foto, nome, local, previa, distancia, elevacao }) {
  return (
    <section>
      <div className="pn-itens">
        <img className="pn-foto-trilha" src={foto} alt="" />
        <div className="pn-info">
          <h3>{nome}</h3>
          <ul className="localiza">
            <li>{local}</li>
            <li>estrelas</li>
          </ul>

          <p className="texto">{previa}</p>

          <ul className="pn-distancia">
            <li>
              <p>
                <span>Distância:</span> {distancia} Km
              </p>
            </li>
            <li>
              <p>
                <span>Elevação:</span> {elevacao} m
              </p>
            </li>
          </ul>
          <a className="conhecer" href="#">
            Conhecer
          </a>
        </div>
      </div>
    </section>
  );
}

export default Trilha;
