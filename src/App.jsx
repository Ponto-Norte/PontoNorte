import { Route, Routes } from 'react-router-dom';
import Guias from './pages/Guias/Guias';
import Parceiros from './pages/Parceiros/Parceiros';
import Plano from './pages/Plano/Plano';
import Trilhas from './pages/Trilhas/Trilhas';
import Home from './pages/Home/Home';
import HomeLogado from './pages/HomeLogado/HomeLogado';
import PerguntasFrequentesTela from './pages/PerguntasFrequentes/PerguntasFrequentes';
import TermosPrivacidadeTela from './pages/TermosPrivacidade/TermosPrivacidade';
import LGPD from './pages/LGPD/LGPD';
import TrilhasMedias from './pages/TrilhasMedias/TrilhasMedias';
import TrilhasCurtas from './pages/TrilhasCurtas/TrilhasCurtas';
import TrilhaSelecionada from './pages/TrilhaSelecionada/TrilhaSelecionada';
import RegistroTrilheiro from './pages/RegistroTrilheiro/RegistroTrilheiro';
import LoginTela from './pages/Login/Login';
import RegistroTrilheiroSucessoTela from './pages/RegistroTrilheiroSucesso/RegistroTrilheiroSucesso';
import RegistroOpcoesTela from './pages/RegistroOpcoes/RegistroOpcoes';
import RegistroGuiaTela from './pages/RegistroGuia/RegistroGuia';
import RegistroGuiaSucessoTela from './pages/RegistroGuiaSucesso/RegistroGuiaSucesso';
import RegistroGuiaEnderecoTela from './pages/RegistroGuiaEndereco/RegistroGuiaEndereco';
import RegistroGuiaBancariosTela from './pages/RegistroGuiaBancarios/RegistroGuiaBancarios';
import TrilhasLogado from './pages/TrilhasLogado/TrilhasLogado';
import GuiasLogado from './pages/GuiasLogado/GuiasLogado';
import ParceirosLogado from './pages/ParceirosLogado/ParceirosLogado';
import PlanosLogado from './pages/PlanosLogado/PlanosLogado';
export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeLogado" element={<HomeLogado />} />
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
        <Route path="/LoginTela" element={<LoginTela />} />
        <Route path="/RegistroTrilheiro" element={<RegistroTrilheiro />} />
        <Route
          path="/RegistroTrilheiroSucessoTela"
          element={<RegistroTrilheiroSucessoTela />}
        />
        <Route path="/RegistroOpcoesTela" element={<RegistroOpcoesTela />} />
        <Route path="/RegistroGuiaTela" element={<RegistroGuiaTela />} />
        <Route
          path="/RegistroGuiaSucessoTela"
          element={<RegistroGuiaSucessoTela />}
        />
        <Route
          path="/endereco-guia/:idGuia"
          element={<RegistroGuiaEnderecoTela />}
        />
        <Route
          path="/RegistroGuiaBancariosTela/:idGuia"
          element={<RegistroGuiaBancariosTela />}
        />
        <Route path="/TrilhasLogado" element={<TrilhasLogado />} />
        <Route path="/GuiasLogado" element={<GuiasLogado />} />
        <Route path="/ParceirosLogado" element={<ParceirosLogado />} />
        <Route path="/PlanosLogado" element={<PlanosLogado />} />
      </Routes>
    </>
  );
}
