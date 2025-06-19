import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Parceiros from './pages/Parceiros/Parceiros.jsx';
import Guias from './pages/Guias/Guias.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Guias />
  </StrictMode>,
);
