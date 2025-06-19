import '../Header/Header.css';
import pnLogo from '../../assets/pnLogo.svg';

function Header() {
  return (
    <div>
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
                  <a href="/">Início</a>
                </li>
                <li>
                  <a href="/Trilhas">Trilhas</a>
                </li>
                <li>
                  <a href="/Guias">Guias</a>
                </li>
                <li>
                  <a href="/Parceiros">Parceiros</a>
                </li>
                <li>
                  <a href="/Planos">Planos</a>
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
    </div>
  );
}

export default Header;
