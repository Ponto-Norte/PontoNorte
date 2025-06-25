import '../RegistroGuia/RegistroGuia.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';

function RegistroGuiaTela(){
  return (
    <>
      <main>
        <section className='pnRegistroGuiaEsq'>
          <div className="pnRegistroGuiaImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className='pnRegistroGuiaFormContainer'>
          
          <section className='pnRegistroGuiaDir'>
           <form action="/RegistroGuia" method="post">
              <div className="pnRegistroGuiaForm">
                <h1>Registrar Guia</h1>
                
                  <div className="pnRegistroGuiaGrupo">
                    <input className='pnRegistroGuiaCampoNome' placeholder='Nome' name="nome" type="name" />
                     <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/user--v1.png" alt="user--v1"/>
                  </div>
                  
                  <div className="pnRegistroGuiaGrupo">
                    <input className='pnRegistroGuiaCampoSobrenome' placeholder='Sobrenome' name="sobrenome" type="name" />
                     <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/user--v1.png" alt="user--v1"/>
                  </div>
        

                  <div className="pnRegistroGuiaGrupo">
                    <input className='pnRegistroGuiaCampoCPF' placeholder='CPF' name="cpf" type="number" />
                     <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/user--v1.png" alt="user--v1"/>
                  </div>

                  <div className="pnRegistroGuiaGrupo">
                    <input className='pnRegistroGuiaCampoEmail' placeholder='E-mail' name="email" type="email" />
                     <img className='pnLRegistroGuiaEmailIcon' width="24" height="24" src="https://img.icons8.com/material-outlined/24/email.png" alt="email"/>
                  </div>
                  
                  <div className="pnRegistroGuiaGrupo">
                    <input className='pnRegistroGuiaCampoTelefone' placeholder='Telefone' name="telefone" type="number" />
                     <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/phone--v1.png" alt="phone--v1"/>
                  </div>

                  <div className="pnRegistroGuiaGrupo">
                    <input className='pnRegistroGuiaCampoSenha' placeholder='Senha' name="senha" type="password" />
                    <img className='pnRegistroGuiaSenhaIcon' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/visible--v1.png" alt="visible--v1"/>
                  </div>
                  
                  <div className="pnRegistroGuiaGrupo">
                    <input className='pnRegistroGuiaCampoRepetirSenha' placeholder='Repita sua senha' name="repetirsenha" type="password" />
                    <img className='pnRegistroGuiaSenhaIcon' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/visible--v1.png" alt="visible--v1"/>
                  </div>
              
                <button className='pnRegistrarGuiaButton' type="submit">Continuar Registro</button>
                <h2>Já tem uma conta? <a className='pnGuiaButtonLink1' href="">Entre agora.</a></h2>
                <h2 className='pnGuiaButtonLink2'>É um trilheiro? <a className='pnGuiaButtonLink2' href="">Registre-se aqui.</a></h2>
              </div>
           </form>
           
            <div className="pnRegistroGuiaAcessibilidade">
              <a href=""><img width="60" height="60" src="https://img.icons8.com/ios-filled/60/0000ff/accessibility2.png" alt="accessibility2"/></a>
            </div>

          </section>
        </section>
        
      </main>
    </>
  )
}

export default RegistroGuiaTela;