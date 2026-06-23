import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-custom d-flex justify-content-between align-items-center">
      <h3 className="logo-text">📝 BlogSpace</h3>

      <div>
        <Link className="btn btn-light me-2" to="/">
          Home
        </Link>

        <Link className="btn btn-light me-2" to="/login">
          Login
        </Link>

        <Link className="btn btn-light me-2" to="/register">
          Register
        </Link>

        <Link className="btn btn-pink" to="/create">
          Write
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;