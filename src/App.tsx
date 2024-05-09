import "./css/App.css";
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chamba from "./pages/Chamba";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="chamba" element={<Chamba />} />
      </Routes>
    </div>
  );
}

export default App;
