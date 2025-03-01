import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
// import CardHome from "./components/Cards/CardHome";
// import CardSobreMim from "./components/Cards/CardSobreMim";
import CardsAmostra from "./components/Cards/CardsAmostra";
import SpaceBackground from "./components/Background";

function App() {
  return (
    <SpaceBackground>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardsAmostra />} />
      </Routes>
    </BrowserRouter>
    </SpaceBackground>
  );
}

export default App;
