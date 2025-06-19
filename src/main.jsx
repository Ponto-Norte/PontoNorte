import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Trilhas from './pages/Trilhas/Trilhas';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Trilhas />
  </StrictMode>,
);
