import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { capitalizeFirstLetter } from "../utils/capitalize";
import "../styles/Profile.css";

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <h2>Please log in to see your profile</h2>;
  }

  return (
    <div className="container-profile">
      <h2>User Profile</h2>
      <p>Name: {capitalizeFirstLetter(user.name)}</p>
      <p>Email: {user.email}</p>
      <p>Role: {capitalizeFirstLetter(user.role)}</p>
      
    </div>
  );
}

export default Profile;
