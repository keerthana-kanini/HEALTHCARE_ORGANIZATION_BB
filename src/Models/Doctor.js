import React, { Component } from 'react';
import axios from 'axios';
import { variables } from './Variable';
import './Doctor.css';
import Navdoctor from '../Navbar/Navdoctor';

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
        password: '',
        imageData: null, // Change to null for better handling of file input
      },
      isEditMode: false,
      showForm: false, // State variable to toggle form display
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
            imageData: null, // Change to null for better handling of file input
          },
          isEditMode: true,
          showForm: true, // Display the form when updating a doctor
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
          'Content-Type': 'multipart/form-data', // Set the correct content type
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
            password: '',
            imageData: null, // Change to null for better handling of file input
          },
          isEditMode: false,
          showForm: false, // Hide the form after updating a doctor
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
            newDoctor: {
              doctor_Name: '',
              specialization: '',
              doctor_Email: '',
              contact_No: '',
              status: '',
              password: '',
              imageData: null,
            },
            isEditMode: false,
            showForm: false,
          });
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

    const formData = new FormData();
    formData.append('contact_No', newDoctor.contact_No);
    formData.append('doctor_Name', newDoctor.doctor_Name);
    formData.append('specialization', newDoctor.specialization);
    formData.append('status', newDoctor.status);
    formData.append('password', newDoctor.password);
    formData.append('imageFile', newDoctor.imageData);

    axios
      .post(`${variables.API_URL}Doctor`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
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
            password: '',
            imageData: null, 
          },
          showForm: false, 
        });
      })
      .catch((error) => {
        console.error('Error creating the doctor:', error);
      });
  };

  toggleForm = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
      selectedDoctorId: null,
      selectedDoctor: null,
      newDoctor: {
        doctor_Name: '',
        specialization: '',
        doctor_Email: '',
        contact_No: '',
        status: '',
        password: '',
        imageData: null,
      },
      isEditMode: false,
    }));
  };

  render() {
    const { doctors, newDoctor, isEditMode, showForm } = this.state;

    return (
      <div>
        <div><Navdoctor/></div>
        <h1 className="App"></h1>
{!showForm && (
  <button className="btn btn-info add-doctor-button" onClick={this.toggleForm}>
    Add Doctor
  </button>
)}
        {showForm && (
          <form onSubmit={this.handleAddDoctor}>
            <h2>{isEditMode ? 'Edit Doctor' : 'Add New Doctor'}</h2>
            <label>
              Doctor Name:
              <input
                type="text"
                name="doctor_Name"
                value={newDoctor.doctor_Name}
                onChange={this.handleInputChange}
                className="text-input"
              />
            </label>
            <label>
              Specialization:
              <input
                type="text"
                name="specialization"
                value={newDoctor.specialization}
                onChange={this.handleInputChange}
                className="text-input"
              />
            </label>
            <label>
              Doctor Email:
              <input
                type="email"
                name="doctor_Email"
                value={newDoctor.doctor_Email}
                onChange={this.handleInputChange}
                className="text-input"
              />
            </label>
            <label>
              Contact No:
              <input
                type="tel"
                name="contact_No"
                value={newDoctor.contact_No}
                onChange={this.handleInputChange}
                className="text-input"
              />
            </label>
            <label>
              Status:
              <input
                type="text"
                name="status"
                value={newDoctor.status}
                onChange={this.handleInputChange}
                className="text-input"
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={newDoctor.password}
                onChange={this.handleInputChange}
                className="text-input"
              />
            </label>
            <label>
              Image:
              <input type="file" name="imageData" onChange={this.handleInputChange} />
            </label>
            <div className="form-buttons">
              <button type="submit">{isEditMode ? 'Save' : 'Add Doctor'}</button>
              <button type="button" className="btn btn-danger" onClick={this.toggleForm}>
  Cancel
</button>

            </div>
          </form>
        )}
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
      </div>
    );
  }
}
