import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Parceiros from './pages/Parceiros/Parceiros';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Parceiros />
    </BrowserRouter>
  </StrictMode>,
);
