import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import logo from '../Images/APOLLOHOSP.jpg';

export default function Navpatient() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/home');
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
              Doctors
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
