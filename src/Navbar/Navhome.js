import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import logo from '../Images/APOLLOHOSP.jpg';

export default function Navhome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/home');
  };

  const handleAdminLogin = () => {
    navigate('/adminlogin');
  };

  const logoStyle = {
    width: '50px',
    height: '50px', 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-info bg-info">
      <div className="container">
        <NavLink className="navbar-brand" to="/home">
          <img src={logo} alt="Logo" style={logoStyle} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/doctorview" activeClassName="active">
                Book Appointment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/Patientlogin" activeClassName="active">
                Login
              </NavLink>
            </li>
            <NavDropdown title="Register" id="register-dropdown">
              <NavDropdown.Item as={NavLink} to="/register" activeClassName="active">
                Register Doctor
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/PatientRegister" activeClassName="active">
                Register Patient
              </NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/adminlogin" activeClassName="active">
                Admin Login
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link btn btn-link text-dark" onClick={handleLogout} style={{ marginLeft: '10px' }}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
