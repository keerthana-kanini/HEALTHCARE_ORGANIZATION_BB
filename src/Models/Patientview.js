import React, { Component } from "react";
import axios from "axios";
import { variables } from "./Variable";
import "./Patient.css";
import Navpatient from "../Navbar/Navpatient";

export class Patientview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      patient_Name: "",
      disease: "",
      disease_Description: "",
      patient_No: "",
      password: "",
      doctorId: "",
      selectedPatientId: null,
      showForm: false,
    };
  }

  componentDidMount() {
    this.fetchPatients();
  }

  fetchPatients() {
    axios
      .get(variables.API_URL + "Patient")
      .then((response) => {
        this.setState({ patients: response.data });
      })
      .catch((error) => {
        console.error("Error Fetching Patients:", error);
      });
  }

  handleNameInputChange = (event) => {
    this.setState({ patient_Name: event.target.value });
  };

  handleDiseaseInputChange = (event) => {
    this.setState({ disease: event.target.value });
  };

  handleDescriptionInputChange = (event) => {
    this.setState({ disease_Description: event.target.value });
  };

  handleNoInputChange = (event) => {
    this.setState({ patient_No: event.target.value });
  };

  handlePasswordInputChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleDoctorIdInputChange = (event) => {
    this.setState({ doctorId: event.target.value });
  };

  toggleForm = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
      selectedPatientId: null,
      patient_Name: "",
      disease: "",
      disease_Description: "",
      patient_No: "",
      password: "",
      doctorId: "",
    }));
  };

  createPatient = () => {
    const { patient_Name, disease, disease_Description, patient_No, password, doctorId } = this.state;

    const patient = {
      patient_Id: 0, // Change patient_id to patient_Id
      patient_Name: patient_Name,
      disease: disease,
      disease_Description: disease_Description,
      patient_No: patient_No,
      password: password,
      doctorId: doctorId ? parseInt(doctorId) : 0,
      doctor: {
        // Add doctor details if necessary
      },
    };

    axios
      .post(variables.API_URL + "Patient", patient, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.errors) {
          console.log("Validation Errors:", data.errors);
        } else {
          console.log("Patient Created:", data);
          this.fetchPatients();
          this.setState({
            patient_Name: "",
            disease: "",
            disease_Description: "",
            patient_No: "",
            password: "",
            doctorId: "",
            showForm: false,
          });
        }
      })
      .catch((error) => {
        console.error("Error Creating the Patient:", error);
      });
  };

  handleUpdate = (patientId) => {
    axios
      .get(variables.API_URL + `Patient/${patientId}`)
      .then((response) => {
        const { patient_Name, disease, disease_Description, patient_No, password, doctorId } = response.data;
        this.setState({
          patient_Name: patient_Name,
          disease: disease,
          disease_Description: disease_Description,
          patient_No: patient_No,
          password: password,
          doctorId: doctorId ? doctorId.toString() : "",
          selectedPatientId: patientId,
          showForm: true,
        });
      })
      .catch((error) => {
        console.error("Error Fetching Patient Details:", error);
      });
  };

  updatePatient = () => {
    const { patient_Name, disease, disease_Description, patient_No, password, doctorId, selectedPatientId } = this.state;

    const updatedPatient = {
      patient_Id: selectedPatientId, // Change selectedPatientId to patient_Id
      patient_Name: patient_Name,
      disease: disease,
      disease_Description: disease_Description,
      patient_No: patient_No,
      password: password,
      doctorId: doctorId ? parseInt(doctorId) : 0,
      doctor: {
        // Add doctor details if necessary
      },
    };

    axios
      .put(variables.API_URL + `Patient/${selectedPatientId}`, updatedPatient, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        console.log("Patient Updated:", data);
        this.fetchPatients();
        this.setState({
          patient_Name: "",
          disease: "",
          disease_Description: "",
          patient_No: "",
          password: "",
          doctorId: "",
          selectedPatientId: null,
          showForm: false,
        });
      })
      .catch((error) => {
        console.error("Error Updating the Patient:", error);
        if (error.response) {
          console.error("Response Data:", error.response.data);
          console.error("Response Status:", error.response.status);
          console.error("Response Headers:", error.response.headers);
        }
      });
  };

  handleDelete = (patientId) => {
    const confirmed = window.confirm("Are you sure you want to delete this patient?");

    if (confirmed) {
      axios
        .delete(`${variables.API_URL}Patient/${patientId}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const data = response.data;
          console.log("Patient Deleted:", data);
          this.fetchPatients(); // Refresh the patient list
        })
        .catch((error) => {
          console.error("Error Deleting the Patient:", error);
        });
    }
  };

  render() {
    const { patients, patient_Name, disease, disease_Description, patient_No, password, doctorId, selectedPatientId, showForm } = this.state;

    return (
        <div><Navpatient/>
      <div className="patient-container">
        <h2></h2>
        {!showForm && (
          <button className="btn btn-primary" onClick={this.toggleForm}>
            Create Patient
          </button>
        )}
        {showForm && (
          <div>
            <h2>{selectedPatientId ? "Update Patient" : "Create Patient"}</h2>
            <div className="input-container">
              {/* Input fields for patient details */}
              <input type="text" value={patient_Name} onChange={this.handleNameInputChange} placeholder="Enter Patient Name" />
              <input type="text" value={disease} onChange={this.handleDiseaseInputChange} placeholder="Enter Disease" />
              <input
                type="text"
                value={disease_Description}
                onChange={this.handleDescriptionInputChange}
                placeholder="Enter Disease Description"
              />
              <input type="text" value={patient_No} onChange={this.handleNoInputChange} placeholder="Enter Patient Number" />
              <input type="text" value={password} onChange={this.handlePasswordInputChange} placeholder="Enter Password" />
              <input type="text" value={doctorId} onChange={this.handleDoctorIdInputChange} placeholder="Enter Doctor ID" />
              {selectedPatientId ? (
                <button className="btn btn-primary" onClick={this.updatePatient}>
                  Save
                </button>
              ) : (
                <button className="btn btn-primary" onClick={this.createPatient}>
                  Create
                </button>
              )}
            </div>
          </div>
        )}

        <div className="card-container">
          {patients.map((patient) => (
            <div className="card" key={patient.patient_Id}>
              <div className="card-header">
                <h3>{patient.patient_Name}</h3>
              </div>
              <div className="card-body">
                <p>Disease: {patient.disease}</p>
                <p>Description: {patient.disease_Description}</p>
                <p>Patient No: {patient.patient_No}</p>
                {/* <p>Password: {patient.password}</p> */}
                <p>Doctor ID: {patient.doctorId}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary" onClick={() => this.handleUpdate(patient.patient_Id)}>
                  Update
                </button>
                <button className="btn btn-danger" onClick={() => this.handleDelete(patient.patient_Id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
}

export default Patientview;
