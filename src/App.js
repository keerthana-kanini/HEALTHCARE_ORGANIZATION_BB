import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Doctor from './Models/Doctor';
import { Patient } from './Models/Patient';

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
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
               </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<Patient/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;