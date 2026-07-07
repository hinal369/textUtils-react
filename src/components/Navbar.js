import { NavLink, Link } from "react-router";

// 1. Destructure props right here and assign default values
export default function Navbar({
  title = "Set Title Here",
  aboutText = "About",
  mode,
  toggleMode,
}) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={mode}
      id="navbar"
    >
      <div className="container-fluid">
        {/* 2. Notice you don't need 'props.' anymore! Just use the variable name */}
        <Link className="navbar-brand" to="/">
          {(title = "TextUtils")}
        </Link>
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
              <NavLink className="nav-link active" aria-current="page" to="/" style={({ isActive})  => ({ color: isActive ? 'blue' : 'black' })}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {aboutText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/dashboard/settings">
                Settings
              </Link>
            </li>
          </ul>
        </div>

        <div className="form-check form-switch">
          <i className="fa fa-moon-o" id="icon" onClick={toggleMode}></i>
        </div>
      </div>
    </nav>
  );
}

// DELETE the Navbar.propTypes and Navbar.defaultProps blocks entirely from the bottom
