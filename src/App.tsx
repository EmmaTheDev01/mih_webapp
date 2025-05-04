import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/layout/Layout";
import PrivateRoute from "./components/auth/PrivateRoute";

// Pages
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import Appointment from "./pages/Appointment";
import Gallery from "./pages/Gallery";
import HireTalent from "./pages/HireTalent";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/hire-talent" element={<HireTalent />} />

            {/* Protected routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/appointment"
              element={
                // <PrivateRoute>
                  <Appointment />
                // </PrivateRoute>
              }
            />

            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
