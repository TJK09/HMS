import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../components/styles/Topbar.css";

export default function Topbar() {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand as={Link} to="/">DeepHeal HMS</Navbar.Brand>
      <Nav className="ms-auto">
        {user ? (
          <>
            <Navbar.Text className="me-3">
              {user.email} ({user.role})
            </Navbar.Text>
            <Button variant="outline-light" size="sm" onClick={logout}>Logout</Button>
          </>
        ) : (
          <Button as={Link} to="/login" variant="light" size="sm">Login</Button>
        )}
      </Nav>
    </Navbar>
  );
}
