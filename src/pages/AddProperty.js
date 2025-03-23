import { useState } from "react";
import { createProperty } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/AddProperty.css";



function AddProperty() {
  const [property, setProperty] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    images: "",
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProperty(property, token);
      alert("Property added successfully!");
      navigate("/my-properties"); // Redirect to My Properties page
    } catch (error) {
      alert("Failed to add property!");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
      <h4>Add Property</h4>
      <input type="text" name="title" value={property.title} onChange={handleChange} placeholder="Title" required />
      <input type="number" name="price" value={property.price} onChange={handleChange} placeholder="Price" required />
      <input type="text" name="location" value={property.location} onChange={handleChange} placeholder="Location" required />
      <input type="text" name="images" value={property.images} onChange={handleChange} placeholder="Image URL" required />
      <textarea name="description" value={property.description} onChange={handleChange} placeholder="Description" required></textarea>
      <button type="submit">Add Property</button>
    </form>
    </div>
 
  );
}

export default AddProperty;
