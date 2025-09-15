import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../components/styles/Sidebar.css";

export default function Sidebar() {
  const { user } = useAuth();

  const nav = [
    { to: "/dashboard", label: "Overview", roles: ["admin", "doctor", "patient", "psychologist"] },
    { to: "/appointments", label: "Appointments", roles: ["admin", "doctor", "patient"] },
    { to: "/records", label: "Records", roles: ["admin", "doctor"] },
    { to: "/depression-test", label: "Depression Test", roles: ["doctor", "patient", "psychologist"] },
  ];

  return (
    <div className="bg-light border-end vh-100 p-3" style={{ width: "220px" }}>
      <Nav className="flex-column">
        {nav.map((n) =>
          user && n.roles.includes(user.role) ? (
            <Nav.Link as={Link} to={n.to} key={n.to}>
              {n.label}
            </Nav.Link>
          ) : null
        )}
      </Nav>
    </div>
  );
}
