import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Resource Booking</h2>

      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/addbooking">Book</Link>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
}

export default Navbar;