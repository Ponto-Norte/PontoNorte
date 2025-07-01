import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import PerguntasFrequentesTela from './pages/PerguntasFrequentes/PerguntasFrequentes'
import Rota from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PerguntasFrequentesTela />
    </BrowserRouter>
  </StrictMode>,
);
