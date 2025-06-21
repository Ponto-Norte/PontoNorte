import '../Parceiros/Parceiros.css';
import lume from '../../assets/parceiros/LogoLume.png';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

function Parceiros() {
  return (
    <>
      <Header />
      <section className="pnParceirosTotal">
        <div className="pnParceirosWallpaper">
          <h1>Conheça nossos Parceiros!</h1>
        </div>
        <section className="pnParceirosContainer">
          <div className="pnParceirosEsquerda">
            <img src={lume} alt="" />
          </div>
          <div className="pnParceirosDados">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a <span>Lume</span>, você garante
              15% de desconto em diversos calçados e produtos da marca. É só
              usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceiros" to="">
              Visitar Pagina
            </Link>
          </div>
        </section>

        <section className="pnParceirosContainer">
          <div className="pnParceirosDados">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a <span>Lume</span>, você garante
              15% de desconto em diversos calçados e produtos da marca. É só
              usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceiros" to="">
              Visitar Pagina
            </Link>
          </div>
          <div className="pnParceirosEsquerda">
            <img src={lume} alt="" />
          </div>
        </section>

        <section className="pnParceirosContainer">
          <div className="pnParceirosEsquerda">
            <img src={lume} alt="" />
          </div>
          <div className="pnParceirosDados">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a <span>Lume</span>, você garante
              15% de desconto em diversos calçados e produtos da marca. É só
              usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceiros" to="">
              Visitar Pagina
            </Link>
          </div>
        </section>

        <section className="pnParceirosContainer">
          <div className="pnParceirosDados">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a <span>Lume</span>, você garante
              15% de desconto em diversos calçados e produtos da marca. É só
              usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceiros" to="">
              Visitar Pagina
            </Link>
          </div>
          <div className="pnParceirosEsquerda">
            <img src={lume} alt="" />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Parceiros;
