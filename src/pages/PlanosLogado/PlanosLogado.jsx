import '../PlanosLogado/PlanosLogado.css';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import FooterLogado from '../../components/FooterLogado/FooterLogado';

function PlanosLogado() {
  return (
    <div id="PlanosLogado">
      <HeaderLogado />
      <section id="PlanosLogado">
        <div className="pn-wallpaper-PlanosLogado">
          <h1>Descubra os Planos Ponto Norte</h1>
        </div>

        <div className="pn-container-PlanosLogado">
          <div className="pn-conteudo-PlanosLogado">
            <h2 id="tituloPlanoEve" className="pnTituloPlanosLogado">
              EVEREST
            </h2>
            <ul>
              <li>
                <h3>GPS Ponto Norte</h3>
                <p>
                  Com o nosso GPS você fica seguro em qualquer lugar do mundo
                </p>
              </li>
              <li>
                <h3>Suporte via Whatsapp</h3>
                <p>Receba o melhor do suporte direto pelo Whatsapp</p>
              </li>
              <li>
                <h3>Acesso aos guias</h3>
                <p>
                  Tenha acesso a guias certificados e garanta mais segurança nas
                  trilhas
                </p>
              </li>
              <li>
                <h3>Cupom de desconto</h3>
                <p>
                  Garanta cupons de desconto em sites parceiros da Ponto Norte
                </p>
              </li>
              <li>
                <h3>Contagem de score</h3>
                <p>
                  Acumule pontos e concorra a prêmios conforme a sua quantidade
                  de trilhas feitas
                </p>
              </li>
            </ul>

            <a id="botaoEve" href="#">
              Assine já
            </a>

            <div className="imageUm"></div>
          </div>
        </div>

        <div id="laranja" className="pn-container-PlanosLogado">
          <div className="pn-conteudo-PlanosLogado-dois">
            <div className="imageDois"></div>
            <h2 id="tituloPlanoAnd">ANDES</h2>
            <ul>
              <li>
                <h3>Suporte via Whatsapp</h3>
                <p>Receba o melhor do suporte direto pelo Whatsapp</p>
              </li>
              <li>
                <h3>Acesso aos guias</h3>
                <p>
                  Tenha acesso a guias certificados e garanta mais segurança nas
                  trilhas
                </p>
              </li>
              <li>
                <h3>Cupom de desconto</h3>
                <p>
                  Garanta cupons de desconto em sites parceiros da Ponto Norte
                </p>
              </li>
              <li>
                <h3>Contagem de score</h3>
                <p>Acumule pontos a cada trilha feita e concorra a prêmios</p>
              </li>
              <li>
                <h3>Contagem de score</h3>
                <p>
                  Acumule pontos e concorra a prêmios conforme a sua quantidade
                  de trilhas feitas
                </p>
              </li>
            </ul>

            <a href="#">Assine já</a>
          </div>
        </div>
        <div id="amarelo" className="pn-container-PlanosLogado">
          <div className="pn-conteudo-PlanosLogado">
            <h2 id="tituloPlanoChap">CHAPADA</h2>
            <ul>
              <li>
                <h3>Suporte via E-mail</h3>
                <p>Receba o suporte Ponto Norte pelo e-mail</p>
              </li>
              <li>
                <h3>Acesso aos Guias</h3>
                <p>
                  Tenha acesso a guias certificados e garanta mais segurança nas
                  trilhas
                </p>
              </li>
              <li>
                <h3>Contagem de Score</h3>
                <p>
                  Acumule pontos e concorra a prêmios conforme a sua quantidade
                  de trilhas feitas
                </p>
              </li>
            </ul>

            <a id="botaoChap" href="#">
              Assine já
            </a>

            <div className="imageTres"></div>
          </div>
        </div>

        <div id="verde" className="pn-container-PlanosLogado">
          <div className="pn-conteudo-PlanosLogado-dois">
            <div className="imageQuatro"></div>
            <h2 id="tituloPlanosLogadoColi">COLINA</h2>
            <ul>
              <li>
                <h3>Acesso às trilhas</h3>
                <p>
                  Conheça as melhores trilhas que a Ponto Norte pode oferecer
                </p>
              </li>
              <li>
                <h3>Acesso a Plataforma</h3>
                <p>
                  Tenha acesso a guias certificados e garanta mais segurança nas
                  trilhas
                </p>
              </li>
              <li>
                <h3>Plano Gratuito</h3>
                <p>
                  Já está incluso no perfil a partir da criação da sua conta
                  Ponto Norte
                </p>
              </li>
            </ul>

            <a href="#">Assine já</a>
          </div>
        </div>
      </section>
      <FooterLogado />
    </div>
  );
}

export default PlanosLogado;
