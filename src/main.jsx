import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header/Header.jsx';
import FooterPontoNorte from './components/Footer/Footer.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <FooterPontoNorte />
  </StrictMode>,
);
