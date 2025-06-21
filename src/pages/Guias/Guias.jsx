import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../Guias/Guias.css';
import GuiaComponente from '../../components/GuiaComponete/GuiaComponente'

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
          <GuiaComponente 
            foto= "/src/assets/guias/guia1.jpg"
            nome="Jonas Almeida"
            avaliacao= {
              <>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/color/25/star--v1.png" alt="star--v1"/>
              </>
            }
            descricao="Montanhista e fotógrafo. Busco sempre o melhor ângulo da natureza com o grupo."
            botao="Conhecer"
          />

          <GuiaComponente 
            foto= "/src/assets/guias/guia2.jpg"
            nome="Jailson José"
            avaliacao= {
              <>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/color/25/star--v1.png" alt="star--v1"/>
              </>
            }
            descricao="Guiando iniciantes com energia e segurança. Bora dar o primeiro passo!"
            botao="Conhecer"
          />

          <GuiaComponente 
            foto= "/src/assets/guias/guia3.jpg"
            nome="Julia Oliveira"
            avaliacao= {
              <>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/color/25/star--v1.png" alt="star--v1"/>
              </>
            }
            descricao="Sou bióloga e guia. Adoro mostrar a natureza de um jeito leve e curioso."
            botao="Conhecer"
          />

          <GuiaComponente 
            foto= "/src/assets/guias/guia4.jpg"
            nome="Amanda Rafaela"
            avaliacao= {
              <>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/color/25/star--v1.png" alt="star--v1"/>
              </>
            }
            descricao="Especialista em montanhas, priorizo segurança e boas histórias na trilha."
            botao="Conhecer"
          />

          <GuiaComponente 
            foto= "/src/assets/guias/guia5.jpg"
            nome="Suzana Santos"
            avaliacao= {
              <>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/color/25/star--v1.png" alt="star--v1"/>
              </>
            }
            descricao="Cachoeiras são meu ponto forte! Curto criar roteiros divertidos e refrescantes."
            botao="Conhecer"
          />

          <GuiaComponente 
            foto= "/src/assets/guias/guia6.jpg"
            nome="Lucas Ferreira"
            avaliacao= {
              <>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/fluency/25/star--v1.png" alt="star--v1"/>
                <img width="25" height="25" src="https://img.icons8.com/color/25/star--v1.png" alt="star--v1"/>
              </>
            }
            descricao="Guia local. Trago cultura e história para cada passo da trilha."
            botao="Conhecer"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Guias;
