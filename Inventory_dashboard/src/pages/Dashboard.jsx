import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();


  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        

        <div className="welcome-section">

          <p>
            Manage resources, track reservations,
            and monitor booking activities efficiently.
          </p>

        </div>

        <div className="cards">

          <div
            className="card"
            onClick={() => navigate("/history")}
          >
            <div className="card-icon">📅</div>
            <h3>Upcoming Bookings</h3>
          </div>

          <div
            className="card"
            onClick={() => navigate("/resources")}
          >
            <div className="card-icon">🏢</div>
            <h3>Active Resources</h3>
          </div>

          <div
            className="card"
            onClick={() => navigate("/addbooking")}
          >
            <div className="card-icon">⏰</div>
            <h3>Reserve Resource</h3>
          </div>

          <div
            className="card"
            onClick={() => navigate("/history")}
          >
            <div className="card-icon">📖</div>
            <h3>Booking History</h3>
          </div>

        </div>

        <div className="quick-actions">

          <h2>⚡ Quick Actions</h2>

          <div className="action-buttons">

            <button
              className="action-btn"
              onClick={() => navigate("/addbooking")}
            >
              📅 Book Resource
            </button>

            <button
              className="action-btn"
              onClick={() => navigate("/resources")}
            >
              📦 View Resources
            </button>

            <button
              className="action-btn"
              onClick={() => navigate("/history")}
            >
              📖 Booking History
            </button>

          </div>

        </div>

        <div className="activity-section">

          <h2>📋 Recent Activity</h2>

          <div className="activity-card">
            📅 Meeting Room A booked for 25-Jun-2026
          </div>

          <div className="activity-card">
            🏢 Computer Lab reserved for 27-Jun-2026
          </div>

          <div className="activity-card">
            🎥 Projector booked for 30-Jun-2026
          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;