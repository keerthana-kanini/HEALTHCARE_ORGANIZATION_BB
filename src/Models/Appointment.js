import React, { Component } from "react";
import axios from "axios";

const API_URL = "https://localhost:7123/api/Appointment";

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
      patientId: "",
      selectedAppointmentId: null,
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.fetchAppointments();
  }

  fetchAppointments() {
    axios
      .get(API_URL)
      .then((response) => {
        this.setState({ appointments: response.data });
      })
      .catch((error) => {
        console.error("Error Fetching Appointments:", error);
        this.setState({ error: "Failed to fetch appointments" });
      });
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createAppointment = () => {
    const {
      appointmentDate,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId
    } = this.state;

    const appointment = {
      appointmentDate,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId: patientId ? parseInt(patientId) : 0
    };

    axios
      .post(API_URL, appointment)
      .then((response) => {
        const data = response.data;
        console.log("Appointment Created:", data);
        this.fetchAppointments();
        this.setState({
          appointmentDate: "",
          description: "",
          patientName: "",
          patientPhoneNumber: "",
          patientEmail: "",
          patientId: ""
        });
      })
      .catch((error) => {
        console.error("Error Creating the Appointment:", error);
        this.setState({ error: "Failed to create appointment" });
      });
  };

  handleUpdate = (appointmentId) => {
    axios
      .get(`${API_URL}/${appointmentId}`)
      .then((response) => {
        const {
          appointmentDate,
          description,
          patientName,
          patientPhoneNumber,
          patientEmail,
          patientId
        } = response.data;
        this.setState({
          appointmentDate,
          description,
          patientName,
          patientPhoneNumber,
          patientEmail,
          patientId: patientId ? patientId.toString() : "",
          selectedAppointmentId: appointmentId
        });
      })
      .catch((error) => {
        console.error("Error Fetching Appointment Details:", error);
        this.setState({ error: "Failed to fetch appointment details" });
      });
  };

  updateAppointment = () => {
    const {
      appointmentDate,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId,
      selectedAppointmentId
    } = this.state;

    const updatedAppointment = {
      appointmentDate,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId: patientId ? parseInt(patientId) : 0
    };

    axios
      .put(`${API_URL}/${selectedAppointmentId}`, updatedAppointment)
      .then((response) => {
        const data = response.data;
        console.log("Appointment Updated:", data);
        this.fetchAppointments();
        this.setState({
          appointmentDate: "",
          description: "",
          patientName: "",
          patientPhoneNumber: "",
          patientEmail: "",
          patientId: "",
          selectedAppointmentId: null
        });
      })
      .catch((error) => {
        console.error("Error Updating the Appointment:", error);
        this.setState({ error: "Failed to update appointment" });
      });
  };

  handleDelete = (appointmentId) => {
    const confirmed = window.confirm("Are you sure you want to delete this appointment?");

    if (confirmed) {
      axios
        .delete(`${API_URL}/${appointmentId}`)
        .then((response) => {
          const data = response.data;
          console.log("Appointment Deleted:", data);
          this.fetchAppointments();
        })
        .catch((error) => {
          console.error("Error Deleting the Appointment:", error);
          this.setState({ error: "Failed to delete appointment" });
        });
    }
  };

  render() {
    const {
      appointments,
      appointmentDate,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId,
      selectedAppointmentId,
      isLoading,
      error
    } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Appointment Component</h1>
        <h2>Create Appointment</h2>

        {/* Input fields for appointment details */}
        <input
          type="text"
          name="appointmentDate"
          value={appointmentDate}
          onChange={this.handleInputChange}
          placeholder="Enter Appointment Date"
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={this.handleInputChange}
          placeholder="Enter Description"
        />
        <input
          type="text"
          name="patientName"
          value={patientName}
          onChange={this.handleInputChange}
          placeholder="Enter Patient Name"
        />
        <input
          type="text"
          name="patientPhoneNumber"
          value={patientPhoneNumber}
          onChange={this.handleInputChange}
          placeholder="Enter Patient Phone Number"
        />
        <input
          type="text"
          name="patientEmail"
          value={patientEmail}
          onChange={this.handleInputChange}
          placeholder="Enter Patient Email"
        />
        <input
          type="text"
          name="patientId"
          value={patientId}
          onChange={this.handleInputChange}
          placeholder="Enter Patient ID"
        />
        {selectedAppointmentId ? (
          <button className="btn btn-primary" onClick={this.updateAppointment}>
            Save
          </button>
        ) : (
          <button className="btn btn-primary" onClick={this.createAppointment}>
            Create
          </button>
        )}

        <div className="card-container">
          {appointments.map((appointment) => (
            <div className="card" key={appointment.appointmentId}>
              <div className="card-header">
                <h3>{appointment.patientName}</h3>
              </div>
              <div className="card-body">
                <p>Date: {appointment.appointmentDate}</p>
                <p>Description: {appointment.description}</p>
                <p>Phone Number: {appointment.patientPhoneNumber}</p>
                <p>Email: {appointment.patientEmail}</p>
                <p>Patient ID: {appointment.patientId}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary" onClick={() => this.handleUpdate(appointment.appointmentId)}>
                  Update
                </button>
                <button className="btn btn-danger" onClick={() => this.handleDelete(appointment.appointmentId)}>
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
