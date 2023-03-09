import "./Navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" id="title">
        {" "}
        Clean Energy for Business
      </NavLink>

      <div>
        <ul id="navbar">
          <NavItem to="/Shop" label="Shop" />
          <NavItem to="/Profile" label="Profile" />
          <NavItem to="/Survey" label="Survey" />
          <NavItem to="/ProgressTracking" label="Progress Tracking" />
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ to, label }) {
  return (
    <li>
      <NavLink to={to} activeClassName="active">
        {label}
      </NavLink>
    </li>
  );
}

export default NavBar;
