import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Doctor from './Models/Doctor';
import { Patient } from './Models/Patient';
import { Home } from './Models/Home';
import DoctorRegister from '../src/Models/DoctorRegister';
import DoctorLogin from './Models/DoctorLogin';
import PatientRegister from './Models/PatientRegister';
import PatientLogin from './Models/PaientLogin';
import Appointment from './Models/Appointment';
import ActiveDoctor from './Models/ActiveDoctor';
import AdminLogin from './Models/AdminLogin';
import HomePage from './Models/HomePage';
import { NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <BrowserRouter>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <NavLink className="nav-link" to="/home" activeClassName="active">
                    HOME
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
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Appointment" activeClassName="active">
                    Appointment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register" activeClassName="active">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login" activeClassName="active">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Patientlogin" activeClassName="active">
                    PatientLogin
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/PatientRegister" activeClassName="active">
                  PatientRegister
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ActiveDoctor" activeClassName="active">
                 Admin
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/AdminLogin" activeClassName="active">
                  AdminLogin
                  </NavLink>
                </li>
                <NavDropdown title="Register" id="register-dropdown">
              <NavDropdown.Item as={NavLink} to="/PatientRegister" activeClassName="active">
                Register Doctor
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Register" activeClassName="active">
                Register Patient
              </NavDropdown.Item>
            </NavDropdown>
                
               </ul>
            </div>
          </div>
        </nav> */}

        <Routes>
          
        <Route path="/home" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<Patient/>} />
          <Route path="/Appointment" element={<Appointment/>} />
          <Route path="/Register" element={<DoctorRegister />} />
          <Route path="/Login" element={<DoctorLogin/>} />
          <Route path="/PatientRegister" element={<PatientRegister />} />
          <Route path="/PatientLogin" element={<PatientLogin/>} />
          <Route path="/ActiveDoctor" element={<ActiveDoctor/>} />
          <Route path="/AdminLogin" element={<AdminLogin/>} />
          <Route path="/homepage" element={<HomePage/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;