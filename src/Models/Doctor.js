import React, { Component } from 'react';
import axios from 'axios';
import { variables } from './Variable';
import './Doctor.css';

export default class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      selectedDoctorId: null,
      selectedDoctor: null,
      newDoctor: {
        doctor_Name: '',
        specialization: '',
        doctor_Email: '',
        contact_No: '',
        status: '',
        imageData: '',
      },
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
          newDoctor: {
            ...selectedDoctor,
            imageData: '',
          },
          isEditMode: true,
        });
      })
      .catch((error) => {
        console.error('Error fetching doctor details:', error);
      });
  };

  updateDoctor = () => {
    const { selectedDoctorId, newDoctor } = this.state;

    axios
      .put(`${variables.API_URL}Doctor/${selectedDoctorId}`, newDoctor, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        const updatedDoctor = response.data;
        console.log('Doctor updated:', updatedDoctor);
        this.fetchDoctors();
        this.setState({
          selectedDoctorId: null,
          selectedDoctor: null,
          newDoctor: {
            doctor_Name: '',
            specialization: '',
            doctor_Email: '',
            contact_No: '',
            status: '',
            imageData: '',
          },
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
        })
        .catch((error) => {
          console.error('Error deleting the doctor:', error);
        });
    }
  };

  handleInputChange = (event) => {
    const { newDoctor } = this.state;
    const { name, value, type, files } = event.target;
    let newValue = value;

    // Handle file input change for the image field
    if (type === 'file' && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newValue = reader.result;
        this.setState({
          newDoctor: {
            ...newDoctor,
            [name]: newValue,
          },
        });
      };
      reader.readAsDataURL(files[0]);
    } else {
      this.setState({
        newDoctor: {
          ...newDoctor,
          [name]: newValue,
        },
      });
    }
  };

  handleAddDoctor = (event) => {
    event.preventDefault();
    const { newDoctor, isEditMode } = this.state;

    if (isEditMode) {
      this.updateDoctor();
      return;
    }

    axios
      .post(`${variables.API_URL}Doctor`, newDoctor, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Doctor created:', response.data);
        this.fetchDoctors();
        this.setState({
          newDoctor: {
            doctor_Name: '',
            specialization: '',
            doctor_Email: '',
            contact_No: '',
            status: '',
            imageData: '',
          },
        });
      })
      .catch((error) => {
        console.error('Error creating the doctor:', error);
      });
  };

  render() {
    const { doctors, newDoctor, isEditMode } = this.state;

    return (
      <div>
        <h1 className="App">Doctors</h1>

        {/* Add Doctor Form */}
        <form onSubmit={this.handleAddDoctor}>
          <h2>{isEditMode ? 'Edit Doctor' : 'Add New Doctor'}</h2>
          <label>
            Doctor Name:
            <input
              type="text"
              name="doctor_Name"
              value={newDoctor.doctor_Name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Specialization:
            <input
              type="text"
              name="specialization"
              value={newDoctor.specialization}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Doctor Email:
            <input
              type="email"
              name="doctor_Email"
              value={newDoctor.doctor_Email}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Contact No:
            <input
              type="tel"
              name="contact_No"
              value={newDoctor.contact_No}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Status:
            <input
              type="text"
              name="status"
              value={newDoctor.status}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Image:
            <input
              type="file"
              name="imageData"
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">{isEditMode ? 'Save' : 'Add Doctor'}</button>
        </form>

        <div className="card-container">
          {doctors.map((doctor) => (
            <div key={doctor.doctor_Id} className="card">
              <img
                className="card-image"
                src={`data:image/jpeg;base64,${doctor.imageData}`}
                alt="Doctor"
              />
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

              {/* Update Button */}
              <button onClick={() => this.handleUpdate(doctor.doctor_Id)}>Update</button>

              <button onClick={() => this.handleDelete(doctor.doctor_Id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
