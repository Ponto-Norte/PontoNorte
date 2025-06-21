import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Plano from './pages/Plano/Plano';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Plano />
    </BrowserRouter>
  </StrictMode>,
);
