import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Parceiros from './pages/Parceiros/Parceiros';
import Guias from './pages/Guias/Guias';
import Plano from './pages/Plano/Plano';
import HeaderLogado from './components/HeaderLogado/HeaderLogado';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeaderLogado />
    </BrowserRouter>
  </StrictMode>,
);
