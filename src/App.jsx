import { BrowserRouter, Route, Routes } from "react-router";
import CardsAmostra from "./components/Cards/CardsAmostra";

import EstilosGlobais from "./components/EstilosGlobais";
import Home from "./pages/Home";
import SpaceBackground from "./components/Background/TelaAbertura";
import BackGroundHome from "./components/Background/TelaHome";

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
          />
          <Route path="/home" element={<BackGroundHome><Home /></BackGroundHome>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
