import { BrowserRouter, Route, Routes } from "react-router";
import CardsAmostra from "./components/Cards/CardsAmostra";
import SpaceBackground from "./components/Background";
import EstilosGlobais from "./components/EstilosGlobais";
import Home from "./pages/Home";

function App() {
  return (
    <SpaceBackground>
      <EstilosGlobais />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardsAmostra />} />          
          <Route path="/home" element={<Home />} />          
        </Routes>
      </BrowserRouter>
    </SpaceBackground>
  );
}

export default App;
