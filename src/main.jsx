import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Trilhas from './pages/Trilhas/Trilhas';
import Guias from './pages/Guias/Guias'
import Parceiros from './pages/Parceiros/Parceiros'
import Plano from './pages/Plano/Plano'
import Header from './components/Header/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
);
