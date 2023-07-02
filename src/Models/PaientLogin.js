import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function PatientLogin() {
  const [patient_Name, setPatientName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const patient = { patient_Name, password };

      fetch('https://localhost:7123/api/Tokens/Patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patient),
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
    }
  };

  const validate = () => {
    let result = true;
    if (patient_Name === '' || patient_Name === null) {
      result = false;
      toast.warning('Please enter your username');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please enter your password');
    }
    return result;
  };

  return (
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
          User Login
        </h2>
        <form onSubmit={proceedLogin}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              required
              value={patient_Name}
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
              <input type="checkbox" id="remember-me" style={{ marginRight: '5px' }} />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Link to="/forgot-password" style={{ color: '#4158d0', textDecoration: 'none' }}>
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
            Not a member? <Link to="/PatientRegister" style={{ color: '#4158d0', textDecoration: 'none' }}>Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
