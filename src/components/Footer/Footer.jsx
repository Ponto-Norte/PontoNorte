import PontoNorteLogo from '../../assets/PontoNorteLogo.png';
import { Link } from 'react-router-dom';
import './Footer.css';

function FooterPontoNorte() {
  return (
    <footer className="pnFooterSite">
      <div className="pnFooterContainer">
        <div className="pnInfoMarca">
          <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
        </div>
        <div className="pnFooterColum">
          <h2>Plataforma</h2>
          <ul>
            <li>
              <Link to="">Trilhas</Link>
            </li>
            <li>
              <Link to="">Planos</Link>
            </li>
            <li>
              <Link to="">Guias</Link>
            </li>
          </ul>
        </div>
        <div className="pnFooterColum">
          <h2>Ajuda</h2>
          <ul>
            <li>
              <Link to="">Perguntas Frequentes</Link>
            </li>
            <li>
              <Link to="">Termos e Privacidade</Link>
            </li>
            <li>
              <Link to="">LGPD</Link>
            </li>
          </ul>
        </div>
        <div className="pnFooterColum">
          <h2>Contatos</h2>
          <ul>
            <li>
              <Link to="">+55 (11)99999-9999</Link>
            </li>
            <li>
              <Link to="">suporte@pontonorte.com.br</Link>
            </li>
          </ul>
        </div>
        <div className="pnFooterColum">
          <ul>
            <li>
              <Link to="">Rua Tito, 54</Link>
            </li>
            <li>
              <Link to="">CEP 05051-000</Link>
            </li>
            <li>
              <Link to="">São Paulo, SP</Link>
            </li>

            <ul className="pnRedesSociais">
              <li>
                <Link target="blank" to="">
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin.png"
                    alt="linkedin"
                  />
                </Link>
              </li>

              <li>
                <Link target="blank" to="http://instagram.com">
                  <img
                    src="https://img.icons8.com/material-outlined/50/FFFFFF/instagram-new.png"
                    alt="instagram-new"
                  />
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <p>Ponto Norte 2025. Todos os direitos reservados.</p>
    </footer>
  );
}

export default FooterPontoNorte;
