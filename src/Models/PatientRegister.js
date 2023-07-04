import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function PatientRegister() {
  const [patient_Name, setPatientName] = useState('');
  const [password, setPassword] = useState('');
  // const [disease, setDisease] = useState('');
  // const [disease_Description, setDiseaseDescription] = useState('');
  const [patient_No, setPatientNo] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    let errorMessage = 'Please enter the value in ';

    if (patient_Name === null || patient_Name === '') {
      isValid = false;
      errorMessage += 'Patient Name';
    }
    if (password === null || password === '') {
      isValid = false;
      errorMessage += ' Password';
    }
    // if (disease === null || disease === '') {
    //   isValid = false;
    //   errorMessage += ' Disease';
    // }
    // if (disease_Description === null || disease_Description === '') {
    //   isValid = false;
    //   errorMessage += ' Disease Description';
    // }
    if (patient_No === null || patient_No === '') {
      isValid = false;
      errorMessage += ' Patient Number';
    }

    if (!isValid) {
      toast.warning(errorMessage);
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const registrationData = {
        patient_Name,
        // disease,
        // disease_Description,
        patient_No,
        password,
      };

      fetch('https://localhost:7123/api/Patient', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registrationData),
      })
        .then((res) => {
          toast.success('Registered Successfully');
          navigate('/PatientLogin');
        })
        .catch((err) => {
          toast.error('Failed: ' + err.message);
        });
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(-135deg, #c850c0, #4158d0)',
  };

  const cardStyle = {
    width: '380px',
    background: '#fff',
    borderRadius: '15px',
    boxShadow: '0px 15px 20px rgba(0,0,0,0.1)',
    padding: '30px',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#4158d0',
  };

  const inputStyle = {
    height: '40px',
    width: '100%',
    outline: 'none',
    fontSize: '16px',
    paddingLeft: '10px',
    border: '1px solid lightgrey',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    height: '40px',
    width: '100%',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    color: '#fff',
    background: 'linear-gradient(-135deg, #c850c0, #4158d0)',
    cursor: 'pointer',
  };

  const linkStyle = {
    color: '#4158d0',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Patient Registration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              required
              value={patient_Name}
              onChange={(e) => setPatientName(e.target.value)}
              style={inputStyle}
              placeholder="Patient Name"
            />
          </div>
          {/* <div>
            <input
              type="text"
              required
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              style={inputStyle}
              placeholder="Disease"
            />
          </div>
          <div>
            <input
              type="text"
              required
              value={disease_Description}
              onChange={(e) => setDiseaseDescription(e.target.value)}
              style={inputStyle}
              placeholder="Disease Description"
            />
          </div> */}
          <div>
            <input
              type="text"
              required
              value={patient_No}
              onChange={(e) => setPatientNo(e.target.value)}
              style={inputStyle}
              placeholder="Patient Number"
            />
          </div>
          <div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit" style={buttonStyle}>
              Register
            </button>
          </div>
        </form>
        <div style={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <Link to="/PatientLogin" style={linkStyle}>
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
