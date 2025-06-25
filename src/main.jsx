import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Parceiros from './pages/Parceiros/Parceiros';
import Guias from './pages/Guias/Guias';
import Plano from './pages/Plano/Plano';
import HeaderLogado from './components/HeaderLogado/HeaderLogado';
import LoginTela from './pages/Login/Login';
import RegistroOpcoesTela from './pages/RegistroOpcoes/RegistroOpcoes';
import RegistroTrilheiroTela from './pages/RegistroTrilheiro/RegistroTrilheiro';
import RegistroTrilheiroSucessoTela from './pages/RegistroTrilheiroSucesso/RegistroTrilheiroSucesso';
import RegistroGuiaTela from './pages/RegistroGuia/RegistroGuia';
import RegistroGuiaEnderecoTela from './pages/RegistroGuiaEndereco/RegistroGuiaEndereco';
import RegistroGuiaBancariosTela from './pages/RegistroGuiaBancarios/RegistroGuiaBancarios';
import RegistroGuiaSucessoTela from './pages/RegistroGuiaSucesso/RegistroGuiaSucesso';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <RegistroGuiaSucessoTela/>
    </BrowserRouter>
  </StrictMode>,
);
