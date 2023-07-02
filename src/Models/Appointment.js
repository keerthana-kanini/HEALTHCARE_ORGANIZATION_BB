import React, { Component } from "react";
import axios from "axios";
import { variables } from "./Variable";
import "./Appointment.css";

export class Appointment extends Component {
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
      selectedAppointmentId: null,
    };
  }

  componentDidMount() {
    this.fetchAppointments();
  }

  fetchAppointments() {
    axios
      .get(`${variables.API_URL}Appointment`)
      .then((response) => {
        this.setState({ appointments: response.data });
      })
      .catch((error) => {
        console.error("Error Fetching Appointments:", error);
      });
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
          this.fetchAppointments();
          this.setState({
            appointmentDate: "",
            description: "",
            patientName: "",
            patientPhoneNumber: "",
            patientEmail: "",
            patientId: "",
            doctorId: "",
          });
        }
      })
      .catch((error) => {
        console.error("Error Creating the Appointment:", error);
      });
  }

  handleUpdate(appointmentId) {
    axios
      .get(`${variables.API_URL}Appointment/${appointmentId}`)
      .then((response) => {
        const {
          appointmentDate,
          description,
          patientName,
          patientPhoneNumber,
          patientEmail,
          patientId,
          doctorId,
        } = response.data;
        this.setState({
          appointmentDate,
          description,
          patientName,
          patientPhoneNumber,
          patientEmail,
          patientId: patientId ? patientId.toString() : "",
          doctorId: doctorId ? doctorId.toString() : "",
          selectedAppointmentId: appointmentId,
        });
      })
      .catch((error) => {
        console.error("Error Fetching Appointment Details:", error);
      });
  }

  updateAppointment() {
    const {
      appointmentDate,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId,
      doctorId,
      selectedAppointmentId,
    } = this.state;

    const appointmentDateValue = new Date(appointmentDate).toISOString();

    const updatedAppointment = {
      appointmentId: selectedAppointmentId,
      appointmentDate: appointmentDateValue,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId: patientId ? parseInt(patientId) : 0,
      doctorId: doctorId ? parseInt(doctorId) : 0,
    };

    axios
      .put(
        `${variables.API_URL}Appointment/${selectedAppointmentId}`,
        updatedAppointment,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data;
        if (data.errors) {
          console.log("Validation Errors:", data.errors);
        } else {
          console.log("Appointment Updated:", data);
          this.fetchAppointments();
          this.setState({
            appointmentDate: "",
            description: "",
            patientName: "",
            patientPhoneNumber: "",
            patientEmail: "",
            patientId: "",
            doctorId: "",
            selectedAppointmentId: null,
          });
        }
      })
      .catch((error) => {
        console.error("Error Updating the Appointment:", error);
      });
  }

  handleDelete(appointmentId) {
    axios
      .delete(`${variables.API_URL}Appointment/${appointmentId}`)
      .then((response) => {
        console.log("Appointment Deleted:", response.data);
        this.fetchAppointments();
      })
      .catch((error) => {
        console.error("Error Deleting the Appointment:", error);
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
      selectedAppointmentId,
    } = this.state;

    return (
      <div className="appointment-container">
        <h2>Appointments</h2>

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
              onClick={() =>
                selectedAppointmentId
                  ? this.updateAppointment()
                  : this.createAppointment()
              }
            >
              {selectedAppointmentId ? "Update Appointment" : "Book Appointment"}
            </button>
          </div>
        </form>

        <h3>Appointment List</h3>
        <div className="appointment-list">
          {appointments.map((appointment) => (
            <div className="appointment-card" key={appointment.appointmentId}>
              <div className="card-body">
                <h4 className="card-title">{appointment.patientName}</h4>
                <p className="card-text">Date: {appointment.appointmentDate}</p>
                <p className="card-text">Description: {appointment.description}</p>
                <p className="card-text">Phone Number: {appointment.patientPhoneNumber}</p>
                <p className="card-text">Email: {appointment.patientEmail}</p>
                <p className="card-text">Patient ID: {appointment.patientId}</p>
                <p className="card-text">Doctor ID: {appointment.doctorId}</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => this.handleUpdate(appointment.appointmentId)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(appointment.appointmentId)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Appointment;