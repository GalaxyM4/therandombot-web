import "./css/App.css";
import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";
import FooterHome from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet />
      <FooterHome />
    </div>
  );
}

export default App;
