import '../RegistroTrilheiro/RegistroTrilheiro.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';

function RegistroTrilheiroTela(){
  return (
    <>
      <main>
        <section className='pnRegistroTrilheiroEsq'>
          <div className="pnRegistroTrilheiroImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className='pnRegistroTrilheiroFormContainer'>
          
          <section className='pnRegistroTrilheiroDir'>
           <form action="/RegistroTrilheiro" method="post">
              <div className="pnRegistroTrilheiroForm">
                <h1>Registrar Trilheiro</h1>
                
                  <div className="pnRegistroTrilheiroGrupo">
                    <input className='pnRegistroTrilheiroCampoNome' placeholder='Nome' name="nome" type="name" />
                     <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/user--v1.png" alt="user--v1"/>
                  </div>
                  
                  <div className="pnRegistroTrilheiroGrupo">
                    <input className='pnRegistroTrilheiroCampoSobrenome' placeholder='Sobrenome' name="sobrenome" type="name" />
                     <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/user--v1.png" alt="user--v1"/>
                  </div>

                  <div className="pnRegistroTrilheiroGrupo">
                    <input className='pnRegistroTrilheiroCampoEmail' placeholder='E-mail' name="email" type="email" />
                     <img className='pnLRegistroTrilheiroEmailIcon' width="24" height="24" src="https://img.icons8.com/material-outlined/24/email.png" alt="email"/>
                  </div>

                  <div className="pnRegistroTrilheiroGrupo">
                    <input className='pnRegistroTrilheiroCampoSenha' placeholder='Senha' name="senha" type="password" />
                    <img className='pnRegistroTrilheiroSenhaIcon' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/visible--v1.png" alt="visible--v1"/>
                  </div>
                  
                  <div className="pnRegistroTrilheiroGrupo">
                    <input className='pnRegistroTrilheiroCampoRepetirSenha' placeholder='Repita sua senha' name="repetirsenha" type="password" />
                    <img className='pnRegistroTrilheiroSenhaIcon' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/visible--v1.png" alt="visible--v1"/>
                  </div>
              
                <button className='pnRegistrarTrilheiroButton' type="submit">Registrar</button>
                <h2>Já tem uma conta? <a className='pnTrilheiroButtonLink1' href="">Entre agora.</a></h2>
                <h2 className='pnTrilheiroButtonLink2'>É um guia? <a className='pnTrilheiroButtonLink2' href="">Registre-se aqui.</a></h2>
              </div>
           </form>
           
            <div className="pnRegistroTrilheiroAcessibilidade">
              <a href=""><img width="60" height="60" src="https://img.icons8.com/ios-filled/60/0000ff/accessibility2.png" alt="accessibility2"/></a>
            </div>

          </section>
        </section>
        
      </main>
    </>
  )
}

export default RegistroTrilheiroTela;