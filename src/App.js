import './App.css';
import Login from "./components/Login.js"
import AreaPersonale from "./components/AreaPersonale.js";
import ListaLibri from "./components/ListaLibri.js";
import AggiungiLibro from './components/AggiungiLibro.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/area-personale" element={<AreaPersonale/>}/>
          <Route path="/libri" element={<ListaLibri/>}/>
          <Route path="/aggiungi-libro" element={<AggiungiLibro/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
