import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav>
      <Link to="/" className="btn">Home</Link>
      <Link to="/listings" className="btn">Listings</Link>

      {user ? (
        <>
          <Link to="/profile" className="btn">{user.name}</Link>

          {/* Show "Add Property" only if the user is a seller */}
          {user.role === "seller" && <Link to="/add-property">Add Property</Link>}

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
