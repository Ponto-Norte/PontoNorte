import '../Login/Login.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';

function LoginTela(){
  return (
    <>
      <main>
        <section className='pnLoginEsquerdo'>
          <div className="pnLoginImagemFundo">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className='pnLoginFormContainer'>
          
          <section className='pnLoginDireito'>
           <form action="/login" method="post">
              <div className="pnLoginForm">
                <h1>Entrar</h1>
                
                  <div className="pnLoginGrupo">
                    <input className='pnLoginCampoEmail' placeholder='E-mail' name="email" type="email" />
                     <img className='pnLoginEmailIcon' width="24" height="24" src="https://img.icons8.com/material-outlined/24/email.png" alt="email"/>
                  </div>

                  <div className="pnLoginGrupo">
                    <input className='pnLoginCampoSenha' placeholder='Senha' name="senha" type="password" />
                    <img className='pnLoginSenhaIcon' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/visible--v1.png" alt="visible--v1"/>
                  </div>
                
                <div className="pnContainerOpcao">
                  <label className='pnLoginCheck' htmlFor=""><input type="checkbox" name="" id="" />Lembrar senha</label>
                  <a href="">Esqueceu a senha?</a>
                </div>
              
                <button className='pnLoginButton' type="submit">Entrar</button>
                <h2>Não tem uma conta? <a href="">Crie uma agora.</a></h2>
              </div>
           </form>
           
          </section>
        </section>
        
      </main>
    </>
  )
}

export default LoginTela;