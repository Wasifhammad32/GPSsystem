import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Googlemap from "./components/Googlemap";
import Leafletmap from "./components/Leafletmap";
import Layout from "./components/Layout";
import Login from './components/Login'
import SignUp from "./components/Signup";
const App = () => {
  return (
    <>

      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Googlemap />} />
            <Route exact path="/leaflet" element={<Leafletmap />} />
          </Routes>
        </Layout>
      </Router> 
      
    
    </>
  );
};

export default App;