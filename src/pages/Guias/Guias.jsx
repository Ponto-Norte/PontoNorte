import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../Guias/Guias.css';
import CardGuias from '../../components/CardGuias/CardGuias';

function Guias() {
  return (
    <>
      <Header />
      <main className="pnGuias">
        <div className="pnWallpaperGuias">
          <h1>Trilhe com confiança</h1>
        </div>

        <section className="pnBuscarGuias">
          <div className="pnConteudoBuscarGuias">
            <h2>Escolha o seu guia</h2>
            <div className="pnCaixaBuscaGuias">
              <input
                type="text"
                placeholder="Encontre o seu guia"
                className="pnPesquisarGuias"
                name=""
                id=""
              />
              {/*<a href="" className='pn-botao-buscar'>Buscar</a>*/}
              <button type="button" className="pnBotaoBuscarGuias">
                Buscar
              </button>
            </div>
          </div>
        </section>

        <section className="pnTituloGuias">
          <h2>Guias da plataforma</h2>
        </section>

        <section className="pnCardsGuias">
          <CardGuias />
          <CardGuias />
          <CardGuias />
          <CardGuias />
          <CardGuias />
          <CardGuias />
          <CardGuias />
          <CardGuias />
          <CardGuias />
          <CardGuias />
          <CardGuias />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Guias;
