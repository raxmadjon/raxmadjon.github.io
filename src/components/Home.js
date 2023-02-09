import { NavLink, Route, Routes } from "react-router-dom";
import "./media/HomeMedia.css"
import "./media/PartfolioMedia.css"
import "./media/ContactMedia.css"
import { Contacts } from "./Contact/Contacts";
import Menu  from "./Menu/Menu"
import Main from "./Home/Main"
import brand from "./brand.png"
import Skiils from "./Skiils/Skills"
import Partfolio from "./Partfolio/Partfolio";
const Home = () => {
  return (
    <div className="Home">
      <div className="home">
        <header>
          <a href="/menu" className="nav a2"><img href="/menu" className="imgronan" src={brand} /></a>
          <nav>
            <NavLink to="/" href="/" className="nav a1">Home</NavLink>
            <NavLink to="/skills" className="nav a2">Skills</NavLink>
            <NavLink to="/partfolio" className="nav a3">Partfolio</NavLink>
            <NavLink to="/contact" className="nav a4">Contact</NavLink>
          </nav>
          
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/skills" element={<Skiils/>} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/partfolio" element={<Partfolio />} />
      </Routes>
    </div>
  );
}

export default Home;

