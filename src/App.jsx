import { BrowserRouter, Route, Routes } from "react-router";
import CardsAmostra from "./components/Cards/CardsAmostra";
import EstilosGlobais from "./components/EstilosGlobais";
import Home from "./pages/Home";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import SobreMim from "./pages/SobreMim";
import Contato from "./pages/Contato";
import SpaceBackground from "./components/Background/TelaAbertura";
import Header from "./components/Header";

function App() {
  return (
    <>
      <EstilosGlobais />
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<SpaceBackground><CardsAmostra /></SpaceBackground>} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
