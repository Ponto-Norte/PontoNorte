import '../Header/Header.css';
import { Link } from 'react-router-dom';
import pnLogo from '../../assets/pnLogo.svg';

function Header() {
  return (
    <div>
      <header className="pnHeader">
        <div className="pnHeaderContainer">
          <Link to="/">
            <img src={pnLogo} className="logo" alt="" />
          </Link>

          <div className="pnHeaderPesquisa">
            <input
              type="text"
              className="pnHeaderBarraPesquisa"
              placeholder="Pesquise sua trilha aqui!"
            />

            <button>
              <i class="bxr  bx-search"></i>
            </button>
          </div>

          <nav className="pnHeaderNav">
            <nav aria-label="navegação primaria">
              <ul className="pnHeaderNavMenu">
                <li>
                  <Link className="pnHeaderLink" to="/">
                    Início
                  </Link>
                </li>
                <li>
                  <Link className="pnHeaderLink" to="/">
                    Trilhas
                  </Link>
                </li>
                <li>
                  <Link className="pnHeaderLink" to="/">
                    Guias
                  </Link>
                </li>
                <li>
                  <Link className="pnHeaderLink" to="/">
                    Parceiros
                  </Link>
                </li>
                <li>
                  <Link className="pnHeaderLink" to="/">
                    Planos
                  </Link>
                </li>
              </ul>
            </nav>
          </nav>

          <div className="pnHeaderDados">
            <Link id="entrar" to="#">
              Entrar
            </Link>
            <Link id="cadastrar" to="#">
              Cadastre-se
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
