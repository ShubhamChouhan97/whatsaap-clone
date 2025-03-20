// import { StrictMode, useState, useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import App from "./App.jsx";
// import Login from "./container/Login";
// import Signup from "./container/Signup";
// import ResetPassword from "./pages/restpass";

// function Main() {
//   const location = useLocation();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Re-check token whenever location changes
//   useEffect(() => {
//     // Re-check token on every location change to update login status
//     const token = localStorage.getItem("token");
//     console.log("t",token);
//     if (token) {
//       setIsLoggedIn(true);
//       } else {
//         setIsLoggedIn(false);
//         }
//   }, [location]);
//    console.log("r",isLoggedIn);

//   return (
//     <Routes>
//       <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={() => setIsLoggedIn(true)} />} />
//       <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <Signup />} />
//       <Route path="/reset-password/:token" element={<ResetPassword />} />
//       <Route path="*" element={ isLoggedIn ? <App /> : <Navigate to="/login" />} />
//     </Routes>
//   );
// }

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <Main />
//     </Router>
//   </StrictMode>
// );

// final
// import { StrictMode, useState, useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import App from "./App.jsx";
// import Login from "./container/Login";
// import Signup from "./container/Signup";
// import ResetPassword from "./pages/restpass";
// import ProtectedRoute from './component/ProtectedRoute';  // Import ProtectedRoute component

// function Main() {
//   const location = useLocation();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check token once, and only set the login state when necessary
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []); // Only run once on initial render

//   return (
//     <Routes>
//       {/* Login page redirect logic */}
//       <Route 
//         path="/login" 
//         element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={() => setIsLoggedIn(true)} />} 
//       />
//       <Route 
//         path="/signup" 
//         element={isLoggedIn ? <Navigate to="/" /> : <Signup />} 
//       />
//       <Route path="/reset-password/:token" element={<ResetPassword />} />
      
//       {/* Wrap protected routes with ProtectedRoute */}
//       <Route element={<ProtectedRoute />}>
//         <Route path="/" element={<App />} />
//         {/* Add other protected routes here */}
//       </Route>

//       {/* Catch-all route */}
//       <Route path="*" element={isLoggedIn ? <App /> : <Navigate to="/login" />} />
//     </Routes>
//   );
// }

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <Main />
//     </Router>
//   </StrictMode>
// );

// check
import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import App from "./App.jsx";
import Login from "./container/Login";
import Signup from "./container/Signup";
import ResetPassword from "./pages/restpass";
import ProtectedRoute from './component/ProtectedRoute';  // Import ProtectedRoute component

function Main() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token once, and only set the login state when necessary
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Only run once on initial render

  // Handle Logout action
  const handleLogout = () => {
    // Remove token from localStorage and set isLoggedIn to false
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      {/* Login page redirect logic */}
      <Route 
        path="/login" 
        element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={() => setIsLoggedIn(true)} />} 
      />
      <Route 
        path="/signup" 
        element={isLoggedIn ? <Navigate to="/" /> : <Signup />} 
      />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      
      {/* Wrap protected routes with ProtectedRoute */}
      <Route element={<ProtectedRoute onLogout={handleLogout} />}>
        <Route path="/" element={<App />} />
        {/* Add other protected routes here */}
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={isLoggedIn ? <App /> : <Navigate to="/login" />} />
    </Routes>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
