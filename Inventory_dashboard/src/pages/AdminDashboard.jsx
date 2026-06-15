import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <div className="dashboard-container">

      <div className="dashboard-top-bar">

        <h1>🛠 Admin Dashboard</h1>

        <button
          className="logout-btn"
          onClick={logout}
        >
          🚪 Logout
        </button>

      </div>

      <div className="welcome-section">

        <p>
          Manage resources, bookings, and users from one place.
        </p>

      </div>

      <div className="cards">

        <div
          className="card"
          onClick={() => navigate("/manage-resources")}
        >
          <div className="card-icon">📦</div>
          <h3>Manage Resources</h3>
        </div>

        <div
          className="card"
          onClick={() => navigate("/manage-bookings")}
        >
          <div className="card-icon">📅</div>
          <h3>Manage Bookings</h3>
        </div>

        <div
          className="card"
          onClick={() => navigate("/users")}
        >
          <div className="card-icon">👥</div>
          <h3>User Management</h3>
        </div>

      </div>

      <div className="activity-section">

        <h2>📋 Admin Functions</h2>

        <div className="activity-card">
          📦 Add / Update / Delete Resources
        </div>

        <div className="activity-card">
          📅 Monitor All Bookings
        </div>

        <div className="activity-card">
          👥 Manage User Accounts
        </div>

      </div>

    </div>

  );
}

export default AdminDashboard;