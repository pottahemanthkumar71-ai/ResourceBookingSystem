import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/addbooking">Book Resource</Link>
      <Link to="/history">Booking History</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Sidebar;