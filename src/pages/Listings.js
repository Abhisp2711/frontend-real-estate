import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { capitalizeFirstLetter } from "../utils/capitalize";
import { fetchListings } from "../services/api";

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings().then(({ data }) => setListings(data));
  }, []);

  return (
    <div>
      <h2 className="listing-header">Properties for Sale & Rent</h2>
      <div className="listings">
        {listings.map((listing) => (
          <div key={listing._id} className="listing-card">
            <div>
              <h3>{capitalizeFirstLetter(listing.title)}</h3>
              <p>Price: ₹{listing.price}</p>
              <p>{listing.description}</p>
              <p>{ listing.sellers}</p>
              <p><i className="fas fa-map-marker-alt"></i> {capitalizeFirstLetter(listing.location)}</p>
            </div>
            <img src={listing.images} alt={listing.title}></img> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;
