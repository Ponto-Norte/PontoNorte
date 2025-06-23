import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import Header from './components/Header/Header';
=======
import Parceiros from './pages/Parceiros/Parceiros';
import Guias from './pages/Guias/Guias';
import Plano from './pages/Plano/Plano';
import HeaderLogado from './components/HeaderLogado/HeaderLogado';
>>>>>>> c56c0a15288ca6235c3183f6a8416c76b436b7f0

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Header />
=======
      <HeaderLogado />
>>>>>>> c56c0a15288ca6235c3183f6a8416c76b436b7f0
    </BrowserRouter>
  </StrictMode>,
);
