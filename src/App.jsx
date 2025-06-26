import { Route, Routes } from 'react-router-dom';

import Guias from './pages/Guias/Guias';
import Parceiros from './pages/Parceiros/Parceiros';
import Plano from './pages/Plano/Plano';
import Trilhas from './pages/Trilhas/Trilhas';
import Home from './pages/Home/Home';

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Guias" element={<Guias />} />
        <Route path="/Parceiros" element={<Parceiros />} />
        <Route path="/Plano" element={<Plano />} />
        <Route path="/Trilhas" element={<Trilhas />} />
      </Routes>
    </>
  );
}
