import '../RegistroGuiaBancarios/RegistroGuiaBancarios.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';

function RegistroGuiaBancariosTela(){
  return (
    <>
      <main>
        <section className='pnRegistroGuiaBancariosEsq'>
          <div className="pnRegistroGuiaBancariosImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className='pnRegistroGuiaBancariosFormContainer'>
          
          <section className='pnRegistroGuiaBancariosDir'>
           <form action="/RegistroGuiaBancarios" method="post">
              <div className="pnRegistroGuiaBancariosForm">
                <h1>Dados Bancários</h1>
                
                  <div className="pnRegistroGuiaBancariosGrupo">
                    <input className='pnRegistroGuiaBancariosCampoNome' placeholder='Instituição Bancária' name="instuicaoBanco" type="name" />
                     <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/us-dollar--v1.png" alt="us-dollar--v1"/>
                  </div>
                  
                  <div className="pnRegistroGuiaBancariosGrupo">
                    <input className='pnRegistroGuiaBancariosCampoSobrenome' placeholder='Código do Banco' name="codigoBanco" type="number" />
                     <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/us-dollar--v1.png" alt="us-dollar--v1"/>
                  </div>
        

                  <div className="pnRegistroGuiaBancariosGrupo">
                    <input className='pnRegistroGuiaBancariosCampoCPF' placeholder='Agência Bancária' name="agenciaBanco" type="number" />
                     <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/us-dollar--v1.png" alt="us-dollar--v1"/>
                  </div>

                  <div className="pnRegistroGuiaBancariosGrupo">
                    <input className='pnRegistroGuiaBancariosCampoEmail' placeholder='Número da Conta Bancária' name="numeroConta" type="number" />
                    <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/us-dollar--v1.png" alt="us-dollar--v1"/>
                  </div>
                  
                <button className='pnRegistrarGuiaBancariosButton' type="submit">Registrar</button>
                <h2>Já tem uma conta? <a className='pnGuiaBancariosButtonLink1' href="">Entre agora.</a></h2>
                <h2 className='pnGuiaBancariosButtonLink2'>É um trilheiro? <a className='pnGuiaBancariosButtonLink2' href="">Registre-se aqui.</a></h2>
              </div>
           </form>
           
            <div className="pnRegistroGuiaBancariosAcessibilidade">
              <a href=""><img width="60" height="60" src="https://img.icons8.com/ios-filled/60/0000ff/accessibility2.png" alt="accessibility2"/></a>
            </div>

          </section>
        </section>
        
      </main>
    </>
  )
}

export default RegistroGuiaBancariosTela;