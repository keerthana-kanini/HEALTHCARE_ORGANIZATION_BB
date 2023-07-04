import React, { Component } from "react";
import axios from "axios";
import { variables } from "./Variable";
//import "./Appointment.css";

export class BookApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      appointmentDate: "",
      description: "",
      patientName: "",
      patientPhoneNumber: "",
      patientEmail: "",
      patientId: 0,
      doctorId: 0,
      isAppointmentBooked: false,
    };
  }

  handleDateInputChange(event) {
    const { value } = event.target;
    this.setState({ appointmentDate: value });
  }

  handleDescriptionInputChange(event) {
    this.setState({ description: event.target.value });
  }

  handleNameInputChange(event) {
    this.setState({ patientName: event.target.value });
  }

  handlePhoneNumberInputChange(event) {
    this.setState({ patientPhoneNumber: event.target.value });
  }

  handleEmailInputChange(event) {
    this.setState({ patientEmail: event.target.value });
  }

  handleIdInputChange(event) {
    this.setState({ patientId: event.target.value });
  }

  handleDoctorIdInputChange(event) {
    this.setState({ doctorId: event.target.value });
  }

  createAppointment() {
    const {
      appointmentDate,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId,
      doctorId,
    } = this.state;
  
    if (!appointmentDate || !description || !patientName || !patientPhoneNumber || !patientEmail || !patientId || !doctorId) {
      alert("Please fill all the fields");
      return;
    }
  
    const appointmentDateValue = new Date(appointmentDate).toISOString();
  
    const newAppointment = {
      appointmentDate: appointmentDateValue,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId: patientId ? parseInt(patientId) : 0,
      doctorId: doctorId ? parseInt(doctorId) : 0,
    };
  
    axios
      .post(`${variables.API_URL}Appointment`, newAppointment, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.errors) {
          console.log("Validation Errors:", data.errors);
        } else {
          console.log("Appointment Created:", data);
          this.setState({
            appointmentDate: "",
            description: "",
            patientName: "",
            patientPhoneNumber: "",
            patientEmail: "",
            patientId: "",
            doctorId: "",
          });
          alert("Appointment booked successfully!");
        }
      })
      .catch((error) => {
        console.error("Error Creating the Appointment:", error);
      });
  }
  

  render() {
    const {
      appointments,
      appointmentDate,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId,
      doctorId,
      isAppointmentBooked,
    } = this.state;

    return (
      <div className="appointment-container">
        <h2>Appointments</h2>

        {isAppointmentBooked && (
          <div className="success-message">Appointment booked successfully!</div>
        )}

        <form>
          <div className="form-group">
            <label>Date:</label>
            <input
              className="form-control"
              type="datetime-local"
              value={appointmentDate}
              onChange={(e) => this.handleDateInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              className="form-control"
              type="text"
              value={description}
              onChange={(e) => this.handleDescriptionInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Patient Name:</label>
            <input
              className="form-control"
              type="text"
              value={patientName}
              onChange={(e) => this.handleNameInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Patient Phone Number:</label>
            <input
              className="form-control"
              type="text"
              value={patientPhoneNumber}
              onChange={(e) => this.handlePhoneNumberInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Patient Email:</label>
            <input
              className="form-control"
              type="text"
              value={patientEmail}
              onChange={(e) => this.handleEmailInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Patient ID:</label>
            <input
              className="form-control"
              type="text"
              value={patientId}
              onChange={(e) => this.handleIdInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Doctor ID:</label>
            <input
              className="form-control"
              type="text"
              value={doctorId}
              onChange={(e) => this.handleDoctorIdInputChange(e)}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => this.createAppointment()}
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookApp;
