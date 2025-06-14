import PontoNorteLogo from '../../assets/PontoNorteLogo.png';
import './Footer.css';

function FooterPontoNorte() {
  return (
    <footer className="pn-footer-site">
      <div className="pn-container">
        <div className="pn-info-marca">
          <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
        </div>
        <div className="pn-footer-coluna-um">
          <h2>Plataforma</h2>
          <ul>
            <li>
              <a href="">Trilhas</a>
            </li>
            <li>
              <a href="">Planos</a>
            </li>
            <li>
              <a href="">Guias</a>
            </li>
          </ul>
        </div>
        <div className="pn-footer-coluna-dois">
          <h2>Ajuda</h2>
          <ul>
            <li>
              <a href="">Perguntas Frequentes</a>
            </li>
            <li>
              <a href="">Termos e Privacidade</a>
            </li>
            <li>
              <a href="">LGPD</a>
            </li>
          </ul>
        </div>
        <div className="pn-footer-coluna-tres">
          <h2>Contatos</h2>
          <ul>
            <li>
              <a href="">+55 (11)99999-9999</a>
            </li>
            <li>
              <a href="">suporte@pontonorte.com.br</a>
            </li>
          </ul>
        </div>
        <div className="pn-footer-coluna-quatro">
          <ul>
            <li>
              <a href="">Rua Tito, 54</a>
            </li>
            <li>
              <a href="">CEP 05051-000</a>
            </li>
            <li>
              <a href="">São Paulo, SP</a>
            </li>
            <div className="pn-redes-sociais">
              <a href="">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin.png"
                  alt="linkedin"
                />{' '}
              </a>
              <a href="">
                <img
                  src="https://img.icons8.com/material-outlined/50/FFFFFF/instagram-new.png"
                  alt="instagram-new"
                />{' '}
              </a>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterPontoNorte;
