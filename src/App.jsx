import { Route, Routes } from 'react-router-dom';

import Guias from './pages/Guias/Guias';
import Parceiros from './pages/Parceiros/Parceiros';
import Plano from './pages/Plano/Plano';
import Trilhas from './pages/Trilhas/Trilhas';
import Home from './pages/Home/Home';
import PerguntasFrequentesTela from './pages/PerguntasFrequentes/PerguntasFrequentes';
import TermosPrivacidadeTela from './pages/TermosPrivacidade/TermosPrivacidade';
import LGPD from './pages/LGPD/LGPD';
import TrilhasMedias from './pages/TrilhasMedias/TrilhasMedias';
import TrilhasCurtas from './pages/TrilhasCurtas/TrilhasCurtas';
import TrilhaSelecionada from './pages/TrilhaSelecionada/TrilhaSelecionada';

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Guias" element={<Guias />} />
        <Route path="/Parceiros" element={<Parceiros />} />
        <Route path="/Plano" element={<Plano />} />
        <Route path="/Trilhas" element={<Trilhas />} />
        <Route path="/TrilhasMedias" element={<TrilhasMedias />} />
        <Route path="/TrilhaSelecionada" element={<TrilhaSelecionada />} />
        <Route
          path="/PerguntasFrequentes"
          element={<PerguntasFrequentesTela />}
        />
        <Route path="/TermosPrivacidade" element={<TermosPrivacidadeTela />} />
        <Route path="/LGPD" element={<LGPD />} />
        <Route path="/TrilhasCurtas" element={<TrilhasCurtas />} />
      </Routes>
    </>
  );
}
