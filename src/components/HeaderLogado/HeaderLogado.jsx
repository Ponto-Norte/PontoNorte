import '../HeaderLogado/HeaderLogado.css';
import { Link } from 'react-router-dom';
import pnLogo from '../../assets/pnLogo.svg';
import { useState } from 'react';

function HeaderLogado() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup)
  };

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
                  <Link className="pnHeaderLink" to="/HomeLogado">
                    Início
                  </Link>
                </li>
                <li>
                  <Link className="pnHeaderLink" to="/TrilhasLogado">
                    Trilhas
                  </Link>
                </li>
                <li>
                  <Link className="pnHeaderLink" to="/GuiasLogado">
                    Guias
                  </Link>
                </li>
                <li>
                  <Link className="pnHeaderLink" to="/ParceirosLogado">
                    Parceiros
                  </Link>
                </li>
                <li>
                  <Link className="pnHeaderLink" to="/PlanosLogado">
                    Planos
                  </Link>
                </li>
              </ul>
            </nav>
          </nav>

          <div className="pnHeaderPerfil">
            <button onClick={togglePopup}>
              <img width="40" height="40" src="https://img.icons8.com/material/40/user-male-circle--v1.png" alt="user-male-circle--v1"/>
            </button>
            {showPopup &&(
              <div className="pnPopup">
                <Link to="/">
                <button className='pnPopupSairConta'>Sair</button></Link>
                <button className='pnPopupSairConta'>Excluir Conta</button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderLogado;
