import { useEffect, useState } from "react";
import API from "../api";

function UserManagement() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    API.get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));

  }, []);

  return (

    <div className="dashboard-container">

      <h1>👥 User Management</h1>

      <div className="resource-list">

        {users.map((u) => (

          <div
            className="resource-item"
            key={u.id}
          >

            <h3>{u.name}</h3>

            <p>📧 {u.email}</p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default UserManagement;