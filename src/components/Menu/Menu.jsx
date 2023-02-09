import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <NavLink to="/" className="a a1">Home</NavLink>
            <NavLink to="/skills" className="nav a2">Skills</NavLink>
            <NavLink to="/partfolio" className="a a3">Partfolio</NavLink>
            <NavLink to="/contact" className="a a4">Contact</NavLink>
        </div>
    );
}

export default Menu;