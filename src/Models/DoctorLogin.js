import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './DoctorLogin.css'; // Import the custom CSS file

export default function DoctorLogin() {
  const [Doctor_Name, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const admin = { Doctor_Name, Password };

      fetch('https://localhost:7123/api/Tokens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(admin),
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
    if (Doctor_Name === '' || Doctor_Name === null) {
      result = false;
      toast.warning('Please Enter Username');
    }
    if (Password === '' || Password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  };

  return (
    <div className="doctor-login-container">
      <div className="offset-lg-3 col-lg-6">
        <form onSubmit={proceedLogin} className="container card">
          <div className="card-header">
            <h2>User Login</h2>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>User Name <span className="errmsg">*</span></label>
              <input
                value={Doctor_Name}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password <span className="errmsg">*</span></label>
              <input
                type="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">Login</button>
            <Link className="btn btn-success" to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
