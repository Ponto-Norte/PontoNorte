import '../RegistroGuiaEndereco/RegistroGuiaEndereco.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';

function RegistroGuiaEnderecoTela(){
  return (
    <>
      <main>
        <section className='pnRegistroGuiaEnderecoEsq'>
          <div className="pnRegistroGuiaEnderecoImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className='pnRegistroGuiaEnderecoFormContainer'>
          
          <section className='pnRegistroGuiaEnderecoDir'>
           <form action="/RegistroGuiaEndereco" method="post">
              <div className="pnRegistroGuiaEnderecoForm">
                <h1>Endereço</h1>
                
                  <div className="pnRegistroGuiaEnderecoGrupo">
                    <input className='pnRegistroGuiaEnderecoCampoNome' placeholder='Cidade' name="cidade" type="name" />
                     <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/home.png" alt="home"/>
                  </div>
                  
                  <div className="pnRegistroGuiaEnderecoGrupo">
                    <input className='pnRegistroGuiaEnderecoCampoSobrenome' placeholder='Estado' name="estado" type="name" />
                     <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/home.png" alt="home"/>
                  </div>
        

                  <div className="pnRegistroGuiaEnderecoGrupo">
                    <input className='pnRegistroGuiaEnderecoCampoCPF' placeholder='Bairro' name="bairro" type="name" />
                     <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/home.png" alt="home"/>
                  </div>

                  <div className="pnRegistroGuiaEnderecoGrupo">
                    <input className='pnRegistroGuiaEnderecoCampoEmail' placeholder='CEP' name="cep" type="number" />
                    <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/home.png" alt="home"/>
                  </div>
                  
                  <div className="pnRegistroGuiaEnderecoGrupo">
                    <input className='pnRegistroGuiaEnderecoCampoTelefone' placeholder='Rua' name="rua" type="name" />
                     <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/home.png" alt="home"/>
                  </div>

                  <div className="pnRegistroGuiaEnderecoGrupo">
                    <input className='pnRegistroGuiaEnderecoCampoSenha' placeholder='Número da Residência' name="numeroResidencia" type="number" />
                   <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/home.png" alt="home"/>
                  </div>
                  
                  <div className="pnRegistroGuiaEnderecoGrupo">
                    <input className='pnRegistroGuiaEnderecoCampoRepetirSenha' placeholder='Ponto de Referência' name="pontoReferencia" type="text" />
                   <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/home.png" alt="home"/>
                  </div>
              
                <button className='pnRegistrarGuiaEnderecoButton' type="submit">Continuar Registro</button>
                <h2>Já tem uma conta? <a className='pnGuiaEnderecoButtonLink1' href="">Entre agora.</a></h2>
                <h2 className='pnGuiaEnderecoButtonLink2'>É um trilheiro? <a className='pnGuiaEnderecoButtonLink2' href="">Registre-se aqui.</a></h2>
              </div>
           </form>
           
            <div className="pnRegistroGuiaEnderecoAcessibilidade">
              <a href=""><img width="60" height="60" src="https://img.icons8.com/ios-filled/60/0000ff/accessibility2.png" alt="accessibility2"/></a>
            </div>

          </section>
        </section>
        
      </main>
    </>
  )
}

export default RegistroGuiaEnderecoTela;