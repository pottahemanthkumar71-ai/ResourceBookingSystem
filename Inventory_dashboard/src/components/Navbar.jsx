import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <nav className="navbar">

      <h2>Resource Booking</h2>

      <div className="nav-links">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/resources">
          Resources
        </Link>

        <Link to="/addbooking">
          Book
        </Link>

        <Link to="/history">
          History
        </Link>

        <button
          className="navbar-logout-btn"
          onClick={logout}
        >
          🚪 Logout
        </button>

      </div>

    </nav>

  );
}

export default Navbar;