import '../PerguntasFrequentes/PerguntasFrequentes.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Pergunta from '../../components/PerguntasFrequentesComponente/PerguntasFrequentesComponente';

function PerguntasFrequentesTela() {
  return (
    <>
      {/* <Header /> */}
      <main className="pnPerguntasFrequentes">
        <div className="pnWallpaperPerguntasFrequentes">
          <div className="pnWallpaperPerguntasFrequentesConteudo">
            <p>PRIVACIDADE</p>
            <h1>Trilhe com confiança</h1>
          </div>
        </div>

        <section className='pnPerguntasFrequentesConteudoContainer'>
          <section className='pnPerguntasFrequentesConteudo'>
            <Pergunta />
          </section>
        </section>

      </main>
      {/* <Footer /> */}
    </>
  );
}

export default PerguntasFrequentesTela;
