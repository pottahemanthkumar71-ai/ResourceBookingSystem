import { useEffect, useState } from "react";
import API from "../api";

function ManageResources() {

  const [resources, setResources] = useState([]);

  const [resource, setResource] = useState({
    name: "",
    category: "",
    capacity: ""
  });

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {

    try {

      const res = await API.get("/resources");

      if (Array.isArray(res.data)) {

        setResources(res.data);

      } else {

        setResources([
          {
            id: 1,
            name: "Meeting Room A",
            category: "Room",
            capacity: 20
          },
          {
            id: 2,
            name: "Computer Lab",
            category: "Lab",
            capacity: 60
          },
          {
            id: 3,
            name: "Seminar Hall",
            category: "Hall",
            capacity: 150
          }
        ]);

      }

    } catch (error) {

      console.log(error);

      setResources([
        {
          id: 1,
          name: "Meeting Room A",
          category: "Room",
          capacity: 20
        },
        {
          id: 2,
          name: "Computer Lab",
          category: "Lab",
          capacity: 60
        },
        {
          id: 3,
          name: "Seminar Hall",
          category: "Hall",
          capacity: 150
        }
      ]);

    }
  };

  const addResource = () => {

    if (
      !resource.name ||
      !resource.category ||
      !resource.capacity
    ) {

      alert("Please fill all fields");

      return;
    }

    const newResource = {
      id: Date.now(),
      name: resource.name,
      category: resource.category,
      capacity: resource.capacity
    };

    setResources([
      ...resources,
      newResource
    ]);

    setResource({
      name: "",
      category: "",
      capacity: ""
    });

    alert("Resource Added Successfully ✅");
  };

  const deleteResource = (id) => {

    setResources(
      resources.filter(
        (r) => r.id !== id
      )
    );

    alert("Resource Deleted ✅");
  };

  return (

    <div className="manage-resource-container">

      <h2>📦 Manage Resources</h2>

      <input
        type="text"
        placeholder="Resource Name"
        value={resource.name}
        onChange={(e) =>
          setResource({
            ...resource,
            name: e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Category"
        value={resource.category}
        onChange={(e) =>
          setResource({
            ...resource,
            category: e.target.value
          })
        }
      />

      <input
        type="number"
        placeholder="Capacity"
        value={resource.capacity}
        onChange={(e) =>
          setResource({
            ...resource,
            capacity: e.target.value
          })
        }
      />

      <button onClick={addResource}>
        ➕ Add Resource
      </button>

      <div className="resource-list">

        {resources.length > 0 ? (

          resources.map((r) => (

            <div
              className="resource-item"
              key={r.id}
            >

              <div>

                <h3>{r.name}</h3>

                <p>
                  📂 {r.category}
                </p>

                <p>
                  👥 Capacity: {r.capacity}
                </p>

              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteResource(r.id)
                }
              >
                🗑 Delete
              </button>

            </div>

          ))

        ) : (

          <p>
            No Resources Available
          </p>

        )}

      </div>

    </div>

  );
}

export default ManageResources;