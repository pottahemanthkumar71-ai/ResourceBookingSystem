import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import AddBooking from "./pages/AddBooking";
import BookingHistory from "./pages/BookingHistory";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageResources from "./pages/ManageResources";
import ManageBookings from "./pages/ManageBookings";
import UserManagement from "./pages/UserManagement";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* User Routes */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/resources"
          element={<Resources />}
        />

        <Route
          path="/addbooking"
          element={<AddBooking />}
        />

        <Route
          path="/history"
          element={<BookingHistory />}
        />

        {/* Admin Routes */}

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/manage-resources"
          element={<ManageResources />}
        />

        <Route
          path="/manage-bookings"
          element={<ManageBookings />}
        />

        <Route
          path="/users"
          element={<UserManagement />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;