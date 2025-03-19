import { useState, useEffect } from "react";
import { fetchListings } from "../services/api";

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings().then(({ data }) => setListings(data));
  }, []);

  return (
    <div>
      <h2>Properties for Sale & Rent</h2>
      <div className="listings">
        {listings.map((listing) => (
          <div key={listing._id} className="listing-card">
            <h3>{listing.title}</h3>
            <p>Price: ${listing.price}</p>
            <p>{listing.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;
