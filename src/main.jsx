import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Parceiros from './pages/Parceiros/Parceiros';
import Guias from './pages/Guias/Guias';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Guias />
    </BrowserRouter>
  </StrictMode>,
);
