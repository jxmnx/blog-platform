import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar-custom d-flex justify-content-between align-items-center">
      <h3 className="logo-text">📝 BlogSpace</h3>

      <div>
        <Link
          className="btn btn-light me-2"
          to="/"
        >
          Home
        </Link>

        {!token ? (
          <>
            <Link
              className="btn btn-light me-2"
              to="/login"
            >
              Login
            </Link>

            <Link
              className="btn btn-light me-2"
              to="/register"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              className="btn btn-light me-2"
              to="/profile"
            >
              Profile
            </Link>

            <Link
              className="btn btn-pink me-2"
              to="/create"
            >
              Write
            </Link>

            <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;