import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import Footer from '../../components/Footer/Footer';
import '../GuiasLogado/GuiasLogado.css';
import CardGuias from '../../components/CardGuias/CardGuias';

function GuiasLogado() {
  return (
    <>
      <HeaderLogado />
      <main className="pnGuiasLogado">
        <div className="pnWallpaperGuiasLogado">
          <h1>Trilhe com confiança</h1>
        </div>

        <section className="pnBuscarGuiasLogado">
          <div className="pnConteudoBuscarGuiasLogado">
            <h2>Escolha o seu guia</h2>
            <div className="pnCaixaBuscaGuiasLogado">
              <input
                type="text"
                placeholder="Encontre o seu guia"
                className="pnPesquisarGuiasLogado"
                name=""
                id=""
              />
              {/*<a href="" className='pn-botao-buscar'>Buscar</a>*/}
              <button type="button" className="pnBotaoBuscarGuiasLogado">
                Buscar
              </button>
            </div>
          </div>
        </section>

        <section className="pnTituloGuiasLogado">
          <h2>Guias da plataforma</h2>
        </section>

        <section className="pnCardsGuiasLogado">
          <CardGuias/>
          <CardGuias/>
          <CardGuias/>
          <CardGuias/>
          <CardGuias/>
          <CardGuias/>
          <CardGuias/>
          <CardGuias/>
          <CardGuias/>
          <CardGuias/>
          <CardGuias/>
        </section>
      </main>
      <FooterLogado />
    </>
  );
}

export default GuiasLogado;
