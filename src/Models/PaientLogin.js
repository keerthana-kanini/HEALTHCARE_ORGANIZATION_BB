import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navhome from '../Navbar/Navhome';

export default function PatientLogin() {
  const [patientName, setPatientName] = useState('');
  const [password, setPassword] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [role, setRole] = useState('patient'); // Default role is "patient"

  const navigate = useNavigate();

  const proceedLoginUsingAPI = (e) => {
    e.preventDefault();

    const apiUrl =
      role === 'user'
        ? 'https://localhost:7123/api/Tokens'
        : 'https://localhost:7123/api/Tokens/Patient';

    const credentials =
      role === 'user'
        ? { doctor_Name: doctorName, password: password }
        : { patient_Name: patientName, password: password };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => {
        if (res.ok) {
          return res.text(); // Return the response as text
        } else {
          throw new Error('Invalid credentials');
        }
      })
      .then((token) => {
        console.log(token); // Log the token for debugging
        sessionStorage.setItem('token', token);
        toast.success('Success');
        navigate('/home');
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error(error.message);
      });
  };

  return (
    <div><Navhome/>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(-135deg, #c850c0, #4158d0)',
      }}
    >
      <div
        style={{
          width: '380px',
          background: '#fff',
          borderRadius: '15px',
          boxShadow: '0px 15px 20px rgba(0,0,0,0.1)',
          padding: '30px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            color: '#4158d0',
          }}
        >
        Login
        </h2>
        <form onSubmit={proceedLoginUsingAPI}>
          {role === 'patient' && (
            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                style={{
                  height: '40px',
                  width: '100%',
                  outline: 'none',
                  fontSize: '16px',
                  paddingLeft: '10px',
                  border: '1px solid lightgrey',
                  borderRadius: '5px',
                }}
                placeholder="Patient Name"
              />
            </div>
          )}
          {role === 'user' && (
            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                required
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                style={{
                  height: '40px',
                  width: '100%',
                  outline: 'none',
                  fontSize: '16px',
                  paddingLeft: '10px',
                  border: '1px solid lightgrey',
                  borderRadius: '5px',
                }}
                placeholder="Doctor Name"
              />
            </div>
          )}
          <div style={{ marginBottom: '20px' }}>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                height: '40px',
                width: '100%',
                outline: 'none',
                fontSize: '16px',
                paddingLeft: '10px',
                border: '1px solid lightgrey',
                borderRadius: '5px',
              }}
              placeholder="Password"
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              color: '#262626',
              fontSize: '14px',
            }}
          >
            <div>
              <div className="form-check">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={role === 'user'}
                  onChange={() => setRole('user')}
                  className="form-check-input"
                />
                <label className="form-check-label">Doctor</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="role"
                  value="patient"
                  checked={role === 'patient'}
                  onChange={() => setRole('patient')}
                  className="form-check-input"
                />
                <label className="form-check-label">Patient</label>
              </div>
            </div>
            <Link
              to="/forgot-password"
              style={{ color: '#4158d0', textDecoration: 'none' }}
            >
              Forgot password?
            </Link>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{
                height: '40px',
                width: '100%',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                color: '#fff',
                background: 'linear-gradient(-135deg, #c850c0, #4158d0)',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '20px',
              color: '#262626',
              fontSize: '14px',
            }}
          >
            Not a member?{' '}
            <Link
              to="/PatientRegister"
              style={{ color: '#4158d0', textDecoration: 'none' }}
            >
              Signup now
            </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
