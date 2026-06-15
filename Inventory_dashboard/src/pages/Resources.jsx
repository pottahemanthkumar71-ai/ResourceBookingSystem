import { useEffect, useState } from "react";
import API from "../api";

function Resources() {

  const [resources, setResources] = useState([]);

  useEffect(() => {

    API.get("/resources")
      .then((res) => {

        if (res.data.length > 0) {

          setResources(res.data);

        } else {

          setResources([
            {
              id: 1,
              name: "Meeting Room A",
              category: "Room",
              status: "Available"
            },
            {
              id: 2,
              name: "Meeting Room B",
              category: "Room",
              status: "Available"
            },
            {
              id: 3,
              name: "Conference Room",
              category: "Room",
              status: "Booked"
            },
            {
              id: 4,
              name: "Computer Lab",
              category: "Lab",
              status: "Available"
            },
            {
              id: 5,
              name: "AI Research Lab",
              category: "Lab",
              status: "Available"
            },
            {
              id: 6,
              name: "Projector",
              category: "Equipment",
              status: "Booked"
            },
            {
              id: 7,
              name: "3D Printer",
              category: "Equipment",
              status: "Available"
            },
            {
              id: 8,
              name: "Seminar Hall",
              category: "Hall",
              status: "Available"
            }
          ]);

        }

      })
      .catch(() => {

        setResources([
          {
            id: 1,
            name: "Meeting Room A",
            category: "Room",
            status: "Available"
          },
          {
            id: 2,
            name: "Meeting Room B",
            category: "Room",
            status: "Available"
          },
          {
            id: 3,
            name: "Conference Room",
            category: "Room",
            status: "Booked"
          },
          {
            id: 4,
            name: "Computer Lab",
            category: "Lab",
            status: "Available"
          },
          {
            id: 5,
            name: "AI Research Lab",
            category: "Lab",
            status: "Available"
          },
          {
            id: 6,
            name: "Projector",
            category: "Equipment",
            status: "Booked"
          },
          {
            id: 7,
            name: "3D Printer",
            category: "Equipment",
            status: "Available"
          },
          {
            id: 8,
            name: "Seminar Hall",
            category: "Hall",
            status: "Available"
          }
        ]);

      });

  }, []);

  return (

    <div className="resources-page">

      <h2 className="resource-title">
        📦 Available Resources
      </h2>

      <div className="resource-grid">

        {resources.map((r) => (

          <div
            className="resource-card"
            key={r.id}
          >

            <h3>{r.name}</h3>

            <p>
              📂 Category: {r.category}
            </p>

            <span
              className={
                r.status === "Available"
                  ? "status available"
                  : "status booked"
              }
            >
              {r.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Resources;