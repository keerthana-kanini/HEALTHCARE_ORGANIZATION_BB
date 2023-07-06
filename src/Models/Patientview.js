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

  render() {
    const { patients } = this.state;

    return (
      <div>
        <Navpatient />
        <div className="patient-container">
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
