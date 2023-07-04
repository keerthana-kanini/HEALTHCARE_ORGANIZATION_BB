import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
        <form onSubmit={proceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>Admin Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Admin Name <span className="errmsg">*</span></label>
                <input value={adminName} onChange={(e) => setAdminName(e.target.value)} className="form-control"></input>
              </div>
              <div className="form-group">
                <label>Password <span className="errmsg">*</span></label>
                <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} className="form-control"></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Login</button>
              <Link className="btn btn-success" to="/register">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
