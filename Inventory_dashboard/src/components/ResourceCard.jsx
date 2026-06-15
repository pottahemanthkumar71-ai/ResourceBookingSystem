function ResourceCard({ resource }) {
  return (
    <div className="resource-card">
      <h3>{resource.name}</h3>
      <p>Category: {resource.category}</p>
      <p>Capacity: {resource.capacity}</p>
      <p>Status: {resource.status}</p>
    </div>
  );
}

export default ResourceCard;