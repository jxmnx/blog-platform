import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        Blog Platform
      </Link>

      <div>
        <Link className="btn btn-light me-2" to="/">
          Home
        </Link>

        <Link className="btn btn-success" to="/create">
          Create Post
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;