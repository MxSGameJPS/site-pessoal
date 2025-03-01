import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
// import CardHome from "./components/Cards/CardHome";
// import CardSobreMim from "./components/Cards/CardSobreMim";
import CardsAmostra from "./components/Cards/CardsAmostra";




function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<CardsAmostra />}  />          
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
