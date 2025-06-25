import '../Home/Home.css';
import { Link } from 'react-router-dom';
import foto1 from '../../assets/usuarios/suario1/perfil.jpg';
import natu from '../../assets/usuarios/suario1/natu.jpg';
import Header from '../../components/Header/Header';
import nature from '../../assets/usuarios/suario1/nature.jpg';
import Slide from '../../components/NossosParceiros/Slide';

function Home() {
  return (
    <>
      <Header />
      <section className="pnHomeUm">
        <div className="pnHomeUmConteudo">
          <h1>
            As melhores trilhas você
            <br /> encontra aqui !
          </h1>
          <p>
            Descubra paisagens incríveis, respire ar puro e viva aventuras que
            ficam na memória!
          </p>
          <Link to="#" className="pnHomeBotaoUm">
            Saiba Mais
          </Link>
        </div>
      </section>

      <article className="pnHomePtTres">
        <div className="pnHomePtTresContainer">
          <div className="pnHomePtTrestitulo">
            <h2>Compartilhe suas experiências</h2>
            <p>
              Comente, faça postagens sobre suas aventuras e interaja com outros
              usuários.
            </p>
          </div>

          <div className="pnHomeComentarios">
            <div className="pnHomeDados">
              <ul className="pnHomeAvaliacao">
                <li>
                  <div className="pnHomeTresSuperior">
                    <img className="pnHomePerfil" src={foto1} alt="" />
                    <div>
                      <p className="pnHomeNome">Mariana coral</p>
                      <div className="pnHomeStrelas">
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <p className="pnHomeComentario">
                    Realizar essa trilha foi especial para mim. Poder revisitar
                    esse lugar e relembrar de todos os seus significados me traz
                    ótimas sensações.
                  </p>

                  <div className="pnHomeFotos">
                    <img src={natu} alt="" />
                    <img src={nature} alt="" />
                  </div>
                </li>

                <li>
                  <div className="pnHomeTresSuperior">
                    <img className="pnHomePerfil" src={foto1} alt="" />
                    <div>
                      <p className="pnHomeNome">Mariana coral</p>
                      <div className="pnHomeStrelas">
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <p className="pnHomeComentario">
                    Realizar essa trilha foi especial para mim. Poder revisitar
                    esse lugar e relembrar de todos os seus significados me traz
                    ótimas sensações.
                  </p>

                  <div className="pnHomeFotos">
                    <img src={natu} alt="" />
                    <img src={nature} alt="" />
                  </div>
                </li>

                <li>
                  <div className="pnHomeTresSuperior">
                    <img className="pnHomePerfil" src={foto1} alt="" />
                    <div>
                      <p className="pnHomeNome">Mariana coral</p>
                      <div className="pnHomeStrelas">
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <p className="pnHomeComentario">
                    Realizar essa trilha foi especial para mim. Poder revisitar
                    esse lugar e relembrar de todos os seus significados me traz
                    ótimas sensações.
                  </p>

                  <div className="pnHomeFotos">
                    <img src={natu} alt="" />
                    <img src={nature} alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <Slide />

      <article className="pnHomePtTres">
        <div className="pnHomePtTresContainer">
          <div className="pnHomePtTrestitulo">
            <h2>Compartilhe suas experiências</h2>
            <p>
              Comente, faça postagens sobre suas aventuras e interaja com outros
              usuários.
            </p>
          </div>

          <div className="pnHomeComentarios">
            <div className="pnHomeDados">
              <ul className="pnHomeAvaliacao">
                <li>
                  <div className="pnHomeTresSuperior">
                    <img className="pnHomePerfil" src={foto1} alt="" />
                    <div>
                      <p className="pnHomeNome">Mariana coral</p>
                      <div className="pnHomeStrelas">
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <p className="pnHomeComentario">
                    Realizar essa trilha foi especial para mim. Poder revisitar
                    esse lugar e relembrar de todos os seus significados me traz
                    ótimas sensações.
                  </p>

                  <div className="pnHomeFotos">
                    <img src={natu} alt="" />
                    <img src={nature} alt="" />
                  </div>
                </li>

                <li>
                  <div className="pnHomeTresSuperior">
                    <img className="pnHomePerfil" src={foto1} alt="" />
                    <div>
                      <p className="pnHomeNome">Mariana coral</p>
                      <div className="pnHomeStrelas">
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <p className="pnHomeComentario">
                    Realizar essa trilha foi especial para mim. Poder revisitar
                    esse lugar e relembrar de todos os seus significados me traz
                    ótimas sensações.
                  </p>

                  <div className="pnHomeFotos">
                    <img src={natu} alt="" />
                    <img src={nature} alt="" />
                  </div>
                </li>

                <li>
                  <div className="pnHomeTresSuperior">
                    <img className="pnHomePerfil" src={foto1} alt="" />
                    <div>
                      <p className="pnHomeNome">Mariana coral</p>
                      <div className="pnHomeStrelas">
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                        <img
                          src="https://img.icons8.com/fluency/30/star--v1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <p className="pnHomeComentario">
                    Realizar essa trilha foi especial para mim. Poder revisitar
                    esse lugar e relembrar de todos os seus significados me traz
                    ótimas sensações.
                  </p>

                  <div className="pnHomeFotos">
                    <img src={natu} alt="" />
                    <img src={nature} alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Home;
