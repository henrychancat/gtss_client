import React from "react";
import { useNavigate,useLocation  } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";
import About from "../components/About";
import Booking from "../components/Booking";
import Trading from "../components/Trading";
import Privacy from "../components/Privacy";
function PrivateRoute({ children }) {
  const isAuthenticated = true;
  const navigate = useNavigate();
  const location=useLocation ();
  console.log(location)
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }
  
  return children;
}
const RouterView = () => {
  return (
    <Routes>
        <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Home />} />
          <Route path="/app/about" element={<About />} />
          <Route path="/app/booking" element={<Booking />} />
          <Route path="/app/trading" element={<Trading/>}/>
          <Route path="/app/privacy" element={<Privacy/>} />
          <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
};
export default RouterView;
