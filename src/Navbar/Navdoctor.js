import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';

export default function Navdoctor() {
  return (
    <div>
        <div> <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin" activeClassName="active">
                Requests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/doctor" activeClassName="active">
                Doctor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/patient" activeClassName="active">
                Patient
              </NavLink>
            </li>
            <NavDropdown title="Register" id="register-dropdown">
              <NavDropdown.Item as={NavLink} to="/register" activeClassName="active">
                Register Doctor
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/loginpatient" activeClassName="active">
                Register Patient
              </NavDropdown.Item>
            </NavDropdown>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/login" activeClassName="active">
                Login
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav></div>
    </div>
  )
}