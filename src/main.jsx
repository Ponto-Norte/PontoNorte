import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RegistroGuiaSucessoTela from './pages/RegistroGuiaSucesso/RegistroGuiaSucesso';


import Home from './pages/Home/Home';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </StrictMode>,
);
