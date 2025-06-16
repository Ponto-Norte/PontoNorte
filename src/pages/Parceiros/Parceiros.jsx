import '../Parceiros/Parceiros.css';
import lume from '../../assets/parceiros/LogoLume.png';

function Parceiros() {
  return (
    <section>
      <div className="pn-wallpaper">
        <h1>Conheça nossos Parceiros!</h1>
      </div>

      <section className="pn-parceiros-container">
        <article className="pn-parceiro">
          <img src={lume} alt="" />
          <div className="pn-conteudo">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a Lume, você garante 15% de desconto
              em diversos produtos da plataforma. É só usar o cupom{' '}
              <b>PONTONORTE15</b> no site da Lume e aproveitar!
            </p>
            <a href="#">Ir para</a>
          </div>
        </article>

        <article className="pn-parceiro-um">
          <div className="pn-conteudo-um">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a Lume, você garante 15% de desconto
              em diversos produtos da plataforma. É só usar o cupom{' '}
              <b>PONTONORTE15</b> no site da Lume e aproveitar!
            </p>
            <a href="#">Ir para</a>
          </div>
          <img src={lume} alt="" />
        </article>

        <article className="pn-parceiro">
          <img src={lume} alt="" />
          <div className="pn-conteudo">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a Lume, você garante 15% de desconto
              em diversos produtos da plataforma. É só usar o cupom{' '}
              <b>PONTONORTE15</b> no site da Lume e aproveitar!
            </p>
            <a href="#">Ir para</a>
          </div>
        </article>

        <article className="pn-parceiro-um">
          <div className="pn-conteudo-um">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a Lume, você garante 15% de desconto
              em diversos produtos da plataforma. É só usar o cupom{' '}
              <b>PONTONORTE15</b> no site da Lume e aproveitar!
            </p>
            <a href="#">Ir para</a>
          </div>
          <img src={lume} alt="" />
        </article>
      </section>
    </section>
  );
}

export default Parceiros;
