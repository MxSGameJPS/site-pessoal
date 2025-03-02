import { BrowserRouter, Route, Routes } from "react-router";
// import CardHome from "./components/Cards/CardHome";
// import CardSobreMim from "./components/Cards/CardSobreMim";
import CardsAmostra from "./components/Cards/CardsAmostra";
import SpaceBackground from "./components/Background";
import EstilosGlobais from "./components/EstilosGlobais";

function App() {
  return (
    <SpaceBackground>
      <EstilosGlobais />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardsAmostra />} />
        </Routes>
      </BrowserRouter>
    </SpaceBackground>
  );
}

export default App;
