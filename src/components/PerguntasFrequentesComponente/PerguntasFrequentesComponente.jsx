import '../PerguntasFrequentesComponete/PerguntasFrequentesComponete.css';

function Pergunta({ foto, nome, avaliacao, descricao, botao }) {
  return (
    <section>
      <div className="pnItemsPergunta">
        <div className="pnPerguntaConteudoContainer">
          <div className="pnPerguntaConteudo">
            <h2>{nome}</h2>
            <ul className="pnAvaliacaoGuia">
              <li>{avaliacao}</li>
            </ul>
            <ul>
              <li className="pnDescGuia">{descricao}</li>
            </ul>
            <button className="pnBotaoGuia"> {botao} </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pergunta;