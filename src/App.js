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
import Doctorcard from './Models/Doctorcard';
import DoctorView from './Models/DoctorView';
import BookApp from './Models/BookApp';
import AdminPage from './Models/AdminPage';
import Admincrud from './Models/Admincrud';
import Patientview from './Models/Patientview';


function App() {
  return (
    <div className="App">
      <ToastContainer />

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<AdminLogin/>} />
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
          <Route path="/doctorcard" element={<Doctorcard/>} />
          <Route path="/doctorview" element={<DoctorView/>} />
          <Route path="/bookapp" element={<BookApp/>} />
          <Route path="/adminpage" element={<AdminPage/>} />
          <Route path="/admincrud" element={<Admincrud/>} />
          <Route path="/patientview" element={<Patientview/>} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;