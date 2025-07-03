import '../ParceirosLogado/ParceirosLogado.css';
import lume from '../../assets/parceiros/LogoLume.png';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import FooterLogado from '../../components/FooterLogado/FooterLogado';
import { Link } from 'react-router-dom';

function ParceirosLogado() {
  return (
    <>
      <HeaderLogado />
      <section className="pnParceirosLogadoTotal">
        <div className="pnParceirosLogadoWallpaper">
          <h1>Conheça nossos Parceiros!</h1>
        </div>
        <section className="pnParceirosLogadoContainer">
          <div className="pnParceirosLogadoEsquerda">
            <img src={lume} alt="" />
          </div>
          <div className="pnParceirosLogadoDados">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a <span>Lume</span>, você garante
              15% de desconto em diversos calçados e produtos da marca. É só
              usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceirosLogado" to="">
              Visitar Pagina
            </Link>
          </div>
        </section>

        <section className="pnParceirosLogadoContainer">
          <div className="pnParceirosLogadoDados">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a <span>Lume</span>, você garante
              15% de desconto em diversos calçados e produtos da marca. É só
              usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceirosLogado" to="">
              Visitar Pagina
            </Link>
          </div>
          <div className="pnParceirosLogadoEsquerda">
            <img src={lume} alt="" />
          </div>
        </section>

        <section className="pnParceirosLogadoContainer">
          <div className="pnParceirosLogadoEsquerda">
            <img src={lume} alt="" />
          </div>
          <div className="pnParceirosLogadoDados">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a <span>Lume</span>, você garante
              15% de desconto em diversos calçados e produtos da marca. É só
              usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceirosLogado" to="">
              Visitar Pagina
            </Link>
          </div>
        </section>

        <section className="pnParceirosLogadoContainer">
          <div className="pnParceirosLogadoDados">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a <span>Lume</span>, você garante
              15% de desconto em diversos calçados e produtos da marca. É só
              usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceirosLogado" to="">
              Visitar Pagina
            </Link>
          </div>
          <div className="pnParceirosLogadoEsquerda">
            <img src={lume} alt="" />
          </div>
        </section>
      </section>
      <FooterLogado />
    </>
  );
}

export default ParceirosLogado;
