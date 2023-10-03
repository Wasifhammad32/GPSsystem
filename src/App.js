import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Googlemap from "./components/Googlemap";
import Leafletmap from "./components/Leafletmap";
import Layout from "./components/Layout";
import Login from "./components/Login";
const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/google" element={<Googlemap />} />
            <Route exact path="/leaflet" element={<Leafletmap />} />
            <Route exact path="/" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
