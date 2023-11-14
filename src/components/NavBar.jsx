import { NavLink } from "react-router-dom";
import "../index.css";

export default function NavBar() {
  return (
    <nav className="nav-container">
      <NavLink to="/">Startside</NavLink>
      <NavLink to="/Data">DataSide</NavLink>
      <NavLink to="/Create">Lav bruger</NavLink>
    </nav>
  );
}
