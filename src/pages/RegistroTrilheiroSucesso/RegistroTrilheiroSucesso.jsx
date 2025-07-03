import '../RegistroTrilheiroSucesso/RegistroTrilheiroSucesso.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';
import { Link } from 'react-router-dom';
function RegistroTrilheiroSucessoTela(){
  return (
    <>
      <main>
        <section className='pnRegistroTrilheiroSucessoEsq'>
          <div className="pnRegistroTrilheiroSucessoImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className='pnRegistroTrilheiroSucessoContainer'>

          <section className='pnRegistroTrilheiroSucessoDir'>
            <div className="pnRegistroTrilheiroSucesso">

              <h1>Registrar Trilheiro</h1>

              <h2>Trilheiro registrado com sucesso!</h2>

              <Link to="/LoginTela">
                <button className='pnRegistrarTrilheiroSucessoButton'>Voltar para o início</button>
              </Link>

            </div>

            <div className="pnRegistroTrilheiroSucessoAcessibilidade">
              <a href=""><img width="60" height="60" src="https://img.icons8.com/ios-filled/60/0000ff/accessibility2.png" alt="accessibility2" /></a>
            </div>

          </section>
        </section>

      </main>
    </>
  )
}

export default RegistroTrilheiroSucessoTela;