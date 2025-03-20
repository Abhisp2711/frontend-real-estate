import { Link } from "react-router-dom";
import "../styles/MyProperties.css";

return (
  <div className="property-container">
    <h2>My Properties</h2>
    <Link to="/add-property">
      <button>Add Property</button>
    </Link>
    {properties.map((property) => (
      <div key={property._id}>
        <h3>{property.title}</h3>
        <p>{property.description}</p>
      </div>
    ))}
  </div>
);
