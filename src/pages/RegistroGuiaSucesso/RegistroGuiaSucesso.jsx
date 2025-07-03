import '../RegistroGuiaSucesso/RegistroGuiaSucesso.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';
import { Link} from 'react-router-dom';
function RegistroGuiaSucessoTela(){
  return (
    <>
      <main>
        <section className='pnRegistroGuiaSucessoEsq'>
          <div className="pnRegistroGuiaSucessoImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className='pnRegistroGuiaSucessoContainer'>
          
          <section className='pnRegistroGuiaSucessoDir'>
              <div className="pnRegistroGuiaSucesso">
                
                <h1>Registrar Guia</h1>

                <h2>Guia registrado com sucesso!</h2>
                <Link to="/LoginTela">
                <button className='pnRegistrarGuiaSucessoButton' type="submit">Voltar para Login</button></Link>
                
              </div>

            <div className="pnRegistroGuiaSucessoAcessibilidade">
              <a href=""><img width="60" height="60" src="https://img.icons8.com/ios-filled/60/0000ff/accessibility2.png" alt="accessibility2"/></a>
            </div>

          </section>
        </section>
        
      </main>
    </>
  )
}

export default RegistroGuiaSucessoTela;