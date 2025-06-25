import '../RegistroOpcoes/RegistroOpcoes.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';

function RegistroOpcoesTela(){
  return (
    <>
      <main>
        <section className='pnRegistroOpcEsquerdo'>
          <div className="pnRegistroOpcImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className='pnRegistroOpcContainer'>
          
          <section className='pnRegistroOpcDireito'>
              <div className="pnRegistroOpcConteudo">
                <h1>Registrar</h1>
                <button className='pnRegistroOpcBtn1' type="submit">Registrar Trilheiro</button>
                <button className='pnRegistroOpcBtn2' type="submit">Registrar Guia</button>
                <div className="pnRegistroOpcLinkVoltar">
                  <a href="">Voltar</a>
                </div>
              </div>
           
          </section>

           <div className="pnRegistroOpcAcessibilidade">
              <a href=""><img width="30" height="30" src="https://img.icons8.com/ios-filled/30/0000ff/accessibility2.png" alt="accessibility2"/></a>
            </div>

        </section>
        
      </main>
    </>
  )
}

export default RegistroOpcoesTela;