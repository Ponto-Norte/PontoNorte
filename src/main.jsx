import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Parceiros from './pages/Parceiros/Parceiros.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parceiros />
  </StrictMode>,
);
