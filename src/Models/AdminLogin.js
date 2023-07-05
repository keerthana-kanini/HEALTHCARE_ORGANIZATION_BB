import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AdminLogin.css';

export default function AdminLogin() {
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const admin = { admin_Name: adminName, admin_Password: adminPassword };

      fetch('https://localhost:7123/api/Tokens/Admin', {
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
          navigate('/adminpage');
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error(error.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (adminName === '' || adminName === null) {
      result = false;
      toast.warning('Please enter admin name');
    }
    if (adminPassword === '' || adminPassword === null) {
      result = false;
      toast.warning('Please enter admin password');
    }
    return result;
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <form onSubmit={proceedLogin} className="admin-login-form">
          <div className="admin-login-header">
            <h2>Admin Login</h2>
          </div>
          <div className="admin-login-body">
            <div className="form-group">
              <label>Admin Name <span className="errmsg">*</span></label>
              <input
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password <span className="errmsg">*</span></label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="admin-login-footer">
            <button type="submit" className="btn btn-primary">Login</button>
            <Link className="btn btn-success" to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
