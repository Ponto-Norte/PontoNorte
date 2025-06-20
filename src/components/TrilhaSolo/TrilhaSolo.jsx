import '../TrilhaSolo/TrilhaSolo.css'


function Trilha({foto,nome,local,previa,distancia,elevacao}){
return(<section>

    <div className='pn-itens'>
      <img className='pn-foto-trilha' src={foto} alt="" />
        <div className="pn-info">
         <h3>{nome}</h3>
              <ul className="localiza">
                <li>{local}</li>
                <li>estrelas</li>
              </ul>
              <span id="description">
                <p>
                  {previa}
                </p>
              </span>
              <ul className="pn-distancia">
                <li>
                  <p>
                    <span>Distância:</span> {distancia}
                  </p>
                </li>
                <li>
                  <span>Elevação:</span> {elevacao}
                </li>
              </ul>
              <a className="conhecer" href="#">
                Conhecer
              </a>
            </div>

    </div>

   
</section>


)

}

export default Trilha;