import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

export const Navbar = (props) => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  
    navigate("/login", { replace: true }); // replace evita que la persona pueda regresar a la pagina anterior con el navegador ( back )
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link"
            to="/marvel"
            activeclassname="active"
          >
            Marvel
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/dc"
            activeclassname="active"
          >
            DC
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/search"
            activeclassname="active"
          >
            Search
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/hero"
            activeclassname="active"
          >
            Hero
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">{user?.name}</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
