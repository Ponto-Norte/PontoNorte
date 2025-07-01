import '../HeaderLogado/HeaderLogado.css';
import { Link } from 'react-router-dom';
import pnLogo from '../../assets/pnLogo.svg';

function HeaderLogado() {
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
              <i className="bxr  bx-search"></i>
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

          <div className="pnHeaderPerfil">
            <button><img width="40" height="40" src="https://img.icons8.com/material/40/user-male-circle--v1.png" alt="user-male-circle--v1"/></button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderLogado;
