import React, { Component } from 'react';
import { variables } from './Variable';
import './Doctor.css';

export default class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
    };
  }

  componentDidMount() {
    this.fetchDoctors();
  }

  fetchDoctors() {
    fetch(variables.API_URL + 'Doctor')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ doctors: data });
        const imagePromises = data.map((doctor) => {
          return fetch(variables.API_URL + `Doctors/${doctor.Doctor_Id}/image`)
            .then((response) => response.json())
            .then((imageData) => {
              doctor.ImageData = imageData;
            });
        });
        return Promise.all(imagePromises);
      })
      .catch((error) => {
        console.error('Error fetching doctors', error);
      });
  }

  render() {
    const { doctors } = this.state;

    return (
      <div>
      <h1>Doctors</h1>
      <div className="card-container">
        {doctors.map((doctor) => (
          <div key={doctor.doctor_Id} className="card">
            {doctor.imageData && (
              <img
                className="card-image"
                src={`data:image/jpeg;base64,${doctor.imageData}`}
                alt="Image"
              />
            )}
            <p>
              <b>Doctor Name:</b> {doctor.doctor_Name}
            </p>
            <p>
              <b>Specialization:</b> {doctor.specialization}
            </p>
            <p>
              <b>Doctor Email:</b> {doctor.doctor_Email}
            </p>
            <p>
              <b>Contact No:</b> {doctor.contact_No}
            </p>
            <p>
              <b>Status:</b> {doctor.status}
            </p>
            {doctor.patients && (
              <div>
                <b>Patients:</b>
                <ul>
                  {doctor.patients.map((patient) => (
                    <li key={patient.patient_Id}>{patient.patient_Name}</li>
                  ))}
                </ul>
              </div>
            )}
            {doctor.appointments && (
              <div>
                <b>Appointments:</b>
                <ul>
                  {doctor.appointments.map((appointment) => (
                    <li key={appointment.appointment_Id}>{appointment.appointment_Date}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    
    );
  }
}