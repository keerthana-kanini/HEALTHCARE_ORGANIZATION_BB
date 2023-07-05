import React, { Component } from 'react';
import axios from 'axios';
import { variables } from './Variable';
import './Doctor.css';
import Navadmin from '../Navbar/Navadmin';

export default class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: []
    };
  }

  componentDidMount() {
    this.fetchDoctors();
  }

  fetchDoctors() {
    axios
      .get(`${variables.API_URL}Doctor`)
      .then((response) => {
        const doctors = response.data;
        this.setState({ doctors });
      })
      .catch((error) => {
        console.error('Error fetching doctors:', error);
      });
  }

  render() {
    const { doctors } = this.state;

    return (
      <div>
        <div><Navadmin/></div>
        <h1 className="App"></h1>

        {/* List of Doctors */}
        <div className="card-container">
          {doctors.map((doctor) => (
            <div key={doctor.doctor_Id} className="card">
              <img
                className="card-image"
                src={`data:image/jpeg;base64,${doctor.imageData}`}
                alt="Doctor"
              />
              <p>Doctor Name: {doctor.doctor_Name}</p>
              <p>Specialization: {doctor.specialization}</p>
              <p>Email: {doctor.doctor_Email}</p>
              <p>Contact No: {doctor.contact_No}</p>
              <p>Status: {doctor.status}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
