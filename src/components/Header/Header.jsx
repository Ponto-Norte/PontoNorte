import './Header.css';
import pnLogo from '../../assets/pnLogo.svg';

function Header() {
  return (
    <header className="pn-header">
      <div className="pn-header-container">
        <img src={pnLogo} className="logo" alt="" />

        <div className="pn-pesquisa">
          <input
            type="text"
            className="pn-barra-pesquisa"
            placeholder="Pesquise sua trilha aqui!"
          />

          <button>
            <i class="bxr  bx-search"></i>
          </button>
        </div>

        <nav className="pn-nav">
          <nav aria-label="navegação primaria">
            <ul className="pn-nav-menu">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Trilhas</a>
              </li>
              <li>
                <a href="#">Guias</a>
              </li>
              <li>
                <a href="#">Parceiros</a>
              </li>
              <li>
                <a href="#">Planos</a>
              </li>
            </ul>
          </nav>
        </nav>

        <div className="pn-dados">
          <a id="entrar" href="#">
            Entrar
          </a>
          <a id="cadastrar" href="#">
            Cadastre-se
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
