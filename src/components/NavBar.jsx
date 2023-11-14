import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Startside</NavLink>
      <NavLink to="/Data">DataSide</NavLink>
      <NavLink to="/Create">Lav bruger</NavLink>
    </nav>
  );
}
