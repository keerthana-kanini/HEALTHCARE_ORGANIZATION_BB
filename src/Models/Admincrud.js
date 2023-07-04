import React, { Component } from 'react';
import axios from 'axios';
import { variables } from './Variable';
import './Doctor.css';

import Navadmin from '../Navbar/Navadmin';

export default class Admincrud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      selectedDoctorId: null,
      selectedDoctor: null,
      isEditMode: false,
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

  handleUpdate = (doctor_Id) => {
    axios
      .get(`${variables.API_URL}Doctor/${doctor_Id}`)
      .then((response) => {
        const selectedDoctor = response.data;
        this.setState({
          selectedDoctorId: doctor_Id,
          selectedDoctor,
          isEditMode: true,
        });
      })
      .catch((error) => {
        console.error('Error fetching doctor details:', error);
      });
  };

  updateDoctor = () => {
    const { selectedDoctorId, selectedDoctor } = this.state;

    axios
      .put(`${variables.API_URL}Doctor/${selectedDoctorId}`, selectedDoctor)
      .then((response) => {
        const updatedDoctor = response.data;
        console.log('Doctor updated:', updatedDoctor);
        this.fetchDoctors();
        this.setState({
          selectedDoctorId: null,
          selectedDoctor: null,
          isEditMode: false,
        });
      })
      .catch((error) => {
        console.error('Error updating the doctor:', error);
      });
  };

  handleDelete = (doctorId) => {
    const confirmed = window.confirm('Are you sure you want to delete this doctor?');

    if (confirmed) {
      axios
        .delete(`${variables.API_URL}Doctor/${doctorId}`)
        .then((response) => {
          console.log('Doctor deleted:', response.data);
          this.fetchDoctors(); // Refresh the list of doctors
          this.setState({
            selectedDoctorId: null,
            selectedDoctor: null,
            isEditMode: false,
          });
        })
        .catch((error) => {
          console.error('Error deleting the doctor:', error);
        });
    }
  };

  handleInputChange = (event) => {
    const { selectedDoctor } = this.state;
    const { name, value } = event.target;

    this.setState({
      selectedDoctor: {
        ...selectedDoctor,
        [name]: value,
      },
    });
  };

  toggleForm = () => {
    this.setState((prevState) => ({
      selectedDoctorId: null,
      selectedDoctor: null,
      isEditMode: false,
    }));
  };

  render() {
    const { doctors, selectedDoctor, isEditMode } = this.state;

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
              <button className="edit-button" onClick={() => this.handleUpdate(doctor.doctor_Id)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => this.handleDelete(doctor.doctor_Id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        {/* Edit Doctor Form */}
        {isEditMode && (
          <form onSubmit={this.updateDoctor}>
            <h2>Edit Doctor</h2>
            <label>
              Doctor Name:
              <input
                type="text"
                name="doctor_Name"
                value={selectedDoctor.doctor_Name}
                onChange={this.handleInputChange}
                className="text-input"
              />
            </label>
            <label>
              Specialization:
              <input
                type="text"
                name="specialization"
                value={selectedDoctor.specialization}
                onChange={this.handleInputChange}
                className="text-input"
              />
            </label>
            <label>
              Doctor Email:
              <input
                type="email"
                name="doctor_Email"
                value={selectedDoctor.doctor_Email}
                onChange={this.handleInputChange}
                className="text-input"
              />
            </label>
            <label>
              Contact No:
              <input
                type="tel"
                name="contact_No"
                value={selectedDoctor.contact_No}
                onChange={this.handleInputChange}
                className="text-input"
              />
            </label>
            <label>
              Status:
              <input
                type="text"
                name="status"
                value={selectedDoctor.status}
                onChange={this.handleInputChange}
                className="text-input"
              />
            </label>
            <button type="submit">Save</button>
            <button type="button" className="btn btn-danger" onClick={this.toggleForm}>
              Cancel
            </button>
          </form>
        )}
      </div>
    );
  }
}
