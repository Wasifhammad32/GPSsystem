import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Googlemap from "./components/Googlemap";
import Leafletmap from "./components/Leafletmap";
import Layout from "./components/Layout";
import Login from "./components/Login";

// Function to check if the user is authenticated based on the presence of a token in localStorage
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token !== null;
};

const App = () => {
  // Initialize the isUserAuthenticated state based on the result of isAuthenticated()
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(
    isAuthenticated()
  );

  useEffect(() => {
    // Function to handle changes in localStorage (token changes)
    const handleStorageChange = () => {
      setIsUserAuthenticated(isAuthenticated());
    };

    // Check for authentication when the token in localStorage changes
    window.addEventListener("storage", handleStorageChange);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Only run this effect once, on component mount

  console.log("Token in localStorage:", localStorage.getItem("token"));
  console.log("Is User Authenticated:", isUserAuthenticated);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isUserAuthenticated ? <Navigate to="/google" /> : <Login />}
        />
        <Route
          path="/google"
          element={
            isUserAuthenticated ? (
              <Layout>
                <Googlemap />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/leaflet"
          element={
            isUserAuthenticated ? (
              <Layout>
                <Leafletmap />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
