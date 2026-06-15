import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  return (

    <div className="dashboard-container">

      <div className="welcome-section">

        <h1>🛠 Admin Dashboard</h1>

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
          <p>Manage Resources</p>
        </div>

        <div
          className="card"
          onClick={() => navigate("/manage-bookings")}
        >
          <div className="card-icon">📅</div>
          <p>Manage Bookings</p>
        </div>

        <div
          className="card"
          onClick={() => navigate("/users")}
        >
          <div className="card-icon">👥</div>
          <p>User Management</p>
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