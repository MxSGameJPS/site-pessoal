import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsAmostra from "./components/Cards/CardsAmostra";
import EstilosGlobais from "./components/EstilosGlobais";
import Home from "./pages/Home";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import SobreMim from "./pages/SobreMim";
import Contato from "./pages/Contato";
import SpaceBackground from "./components/Background/TelaAbertura";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <EstilosGlobais />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SpaceBackground>
                <CardsAmostra />
              </SpaceBackground>
            }
          />{" "}
          {/* Sem header */}
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/sobre-mim"
            element={
              <>
                <Header />
                <SobreMim />
                <Footer />
              </>
            }
          />
          <Route
            path="/projetos"
            element={
              <>
                <Header />
                <Projetos />
                <Footer />
              </>
            }
          />
          <Route
            path="/habilidades"
            element={
              <>
                <Header />
                <Habilidades />
                <Footer />
              </>
            }
          />
          <Route
            path="/contato"
            element={
              <>
                <Header />
                <Contato />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
