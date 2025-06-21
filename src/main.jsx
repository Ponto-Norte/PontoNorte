import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Trilhas from './pages/Trilhas/Trilhas';
import Guias from './pages/Guias/Guias';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Guias />
  </StrictMode>,
);
