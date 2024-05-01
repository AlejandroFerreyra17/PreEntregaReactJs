import {NavLink} from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <p className="navbar-brand">
            <img
              className="redonde-5"
              width={50}
              src="./src/main-logo.png"
              alt=""
            />
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="category/semilla">
                  Semillas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="category/cafe">
                  Café
                </NavLink>
              </li>
              <li className="nav-item">
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
