import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
   <nav className="navbar">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/addstudent">
        Add Student
      </NavLink>

      <NavLink to="/students">
        Student List
      </NavLink>

      <NavLink to="/contact">
        Contact
      </NavLink>
    </nav>
      
  );
}

export default Navbar;