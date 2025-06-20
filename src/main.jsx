import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Guias from './pages/Guias/Guias';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Guias />
  </StrictMode>,
);
