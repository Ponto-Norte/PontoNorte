import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Rota from './App';
import LGDPTela from './pages/LGPD/LGPD';
import PerguntasFrequentesLogadoTela from './pages/PerguntasFrequentesLogado/PerguntasFrequentesLogado';
import PlanosLogado from './pages/PlanosLogado/PlanosLogado';
import TrilhasLogado from './pages/TrilhasLogado/TrilhasLogado';
import ParceirosLogado from './pages/ParceirosLogado/ParceirosLogado';
import LGPDLogadoTela from './pages/LGPDLogado/LGPDLogado';
import HomeLogado from './pages/HomeLogado/HomeLogado';
import GuiasLogado from './pages/GuiasLogado/GuiasLogado';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Rota />
    </BrowserRouter>
  </StrictMode>,
);
