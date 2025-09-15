// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AppShell from "./layouts/AppShell";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardHome from "./pages/DashboardHome";
import AppointmentsPage from "./pages/AppointmentsPage";
import RecordsPage from "./pages/RecordsPage";
import DepressionTestPage from "./pages/DepressionTestPage";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin", "doctor", "patient", "psychologist"]}>
                <AppShell><DashboardHome /></AppShell>
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointments"
            element={
              <ProtectedRoute allowedRoles={["admin", "doctor", "patient"]}>
                <AppShell><AppointmentsPage /></AppShell>
              </ProtectedRoute>
            }
          />
          <Route
            path="/records"
            element={
              <ProtectedRoute allowedRoles={["admin", "doctor"]}>
                <AppShell><RecordsPage /></AppShell>
              </ProtectedRoute>
            }
          />
          <Route
            path="/depression-test"
            element={
              <ProtectedRoute allowedRoles={["doctor", "patient", "psychologist"]}>
                <AppShell><DepressionTestPage /></AppShell>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
