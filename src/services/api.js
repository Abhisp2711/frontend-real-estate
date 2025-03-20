import axios from "axios";

const API = axios.create({ baseURL: "https://backend-real-estate-ui1z.onrender.com/api" });

// User Authentication
export const registerUser = (userData) => API.post("/auth/register", userData);
export const loginUser = (userData) => API.post("/auth/login", userData);
export const getUserProfile = (token) =>
  API.get("/auth/profile", { headers: { Authorization: `Bearer ${token}` } });

// Listings
export const fetchListings = () => API.get("/properties");
export const createListing = (data, token) =>
  API.post("/properties", data, { headers: { Authorization: `Bearer ${token}` } });
export const createProperty = (data, token) =>
  API.post("/properties", data, { headers: { Authorization: `Bearer ${token}` } });
