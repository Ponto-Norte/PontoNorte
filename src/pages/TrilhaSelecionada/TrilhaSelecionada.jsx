import '../TrilhaSelecionada/TrilhaSelecionada.css';
import Footer from '../../components/Footer/Footer';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';

function TrilhaSelecionadaTela() {
  return (
    <>
      <HeaderLogado />
      <main className="pnTrilhaSelecionada">
        <div className="pnWallpaperTrilhaSelecionada">
          <div className="pnWallpaperTrilhaSelecionadaConteudo">
            <h1>Trilha do Riacho Grande</h1>
          </div>
        </div>

        <section className="pnTrilhaFotosGuias">
          <div className="pnTrilhaFotosGuiasContainer">
            <div className="pnTrilhaFotos">
              <div className="pnTrilhaFotosTitulo">
                <h2>Fotos da trilha</h2>
              </div>
              <div className="pnTrilhasFotosImgs"></div>
            </div>

            <div className="pnTrilhaGuias">
              <div className="pnTrilhasGuiasTitulo">
                <h2>Guias</h2>
              </div>
              <div className="pnTrilhaGuiasCard"></div>
            </div>
          </div>
        </section>

        <section className="pnTrilhaDesc">
          <div className="pnTrilhaDescTitulo">
            <h2>Descrição</h2>
          </div>

          <div className="pnTrilhaDescConteudoContainer">
            <div className="pnTrilhaDescConteudo">
              <p>
                Com 18,04 km de extensão, essa trilha é ideal para aventureiros
                em busca de contato intenso com a natureza, sem exigir
                experiência avançada. O percurso apresenta dificuldade moderada,
                sendo indicado para praticantes com bom condicionamento físico
                ou iniciantes dispostos a encarar um desafio estimulante.
                <br />
                <br />
                Durante o trajeto, os caminhantes percorrem trechos de floresta
                nativa, campos abertos e mirantes naturais, com elevações que
                variam entre 581 m e 834 m. Essa variação garante paisagens
                diversificadas e vistas panorâmicas ao longo do caminho,
                especialmente nos pontos mais altos. 
                <br />
                <br />
                Com mais de 3.000 visitas
                registradas, é uma trilha bastante conhecida e frequentada, mas
                ainda preserva a tranquilidade de ambientes pouco explorados.
                Não é necessário guia, o que a torna uma boa opção para grupos
                autônomos e entusiastas que preferem planejar o trajeto por
                conta própria — sempre com responsabilidade e atenção à
                sinalização. 
                <br />
                <br />
                Prepare-se para uma jornada rica em biodiversidade,
                silêncio e ar puro, com a dose certa de esforço físico e
                recompensa visual.
              </p>
            </div>
          </div>
        </section>

        <section className='pnTrilhaInfo'> 
          <div className="pnTrilhaInfoTitulo">
            <h2>Informações da Trilha</h2>
          </div>

          <div className="pnTrilhaInfoConteudoContainer">
            <div className="pnTrilhaInfoConteudo1">
              <p>Distância: 18.04km</p>
              <p>Elevação Máxima: 834m</p>
              <p>Elevação Mínima: 581m</p>
            </div>
            <div className="pnTrilhaInfoConteudo2">
              <p>Visitas: 3.298</p>
              <p>Guia Obrigatório: Não</p>
              <p>Dificuldade: Moderada</p>
            </div>
          </div>
        </section>

        <section className='pnTrilhaEqp'>
          <div className="pnTrilhaEqpTitulo">
            <h2>Equipamentos Recomendados</h2>
          </div>

          <div className="pnTrilhaEqpConteudoContainer">
            <div className="pnTrilhaEqpConteudo1">
              <p>Botas: Recomendado</p>
              <p>Bastão Trekking: Opcional</p>
              <p>Barraca: Não</p>
            </div>
            <div className="pnTrilhaEqpConteudo2">
              <p>Mochila: Obrigatório</p>
              <p>Cantil: Obrigatório</p>
              <p>Lanterna: Não</p>
            </div>
            <div className="pnTrilhaEqpConteudo3">
              <p>Fogareiro: Opcional</p>
              <p>Tênis Anfíbio: Opcional</p>
              <p>Pilhas: Não</p>
            </div>
          </div>
        </section>

        <section className='pnTrilhaTrajeto'>
          <div className="pnTrilhaTrajetoConteudoContainer">
            <div className="pnTrilhaTrajetoConteudo">
              <div className="pnTrilhaTrajetoTitulo">
                <h2>Trajeto Riacho Grande</h2>
              </div>
              <div className="pnTrilhaTrajetoMapa">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1uyxnw5SnPSDNnQ-AKLCAMpyoPhB-U5A&ehbc=2E312F&noprof=1"
                  width="800"
                  height="400"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        

      </main>
      <Footer />
    </>
  );
}

export default TrilhaSelecionadaTela;
