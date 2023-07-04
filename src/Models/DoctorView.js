import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DoctorCard.css';
import { Link, useNavigate } from 'react-router-dom';
import Navpatient from '../Navbar/Navpatient';
// import Navbar from './Navbar';

export default function DoctorView() {
  const [doctors, setDoctors] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('https://localhost:7123/api/Doctor/ApprovedDoctors');
      if (!response.data) {
        throw new Error('Failed to fetch doctors');
      }
      setDoctors(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleBookAppointment = () => {
    navigate('/bookapp');
  };


  const convertToImage = (imageData) => {
    const base64Image = `data:image/jpeg;base64,${imageData}`;
    return <img src={base64Image} alt="Doctor" className="docimg" />;
  };

  const handleUpdate = async (doctor) => {
    try {
      const formData = new FormData();
      formData.append('doctor_Id', doctor.doctor_Id);
      formData.append('doctor_Name', doctor.updatedName || doctor.doctor_Name);
      formData.append('specialization', doctor.updatedSpecialization || doctor.specialization);
      formData.append('doctor_Email', doctor.updatedEmail || doctor.doctor_Email);
      formData.append('contact_No', doctor.updatedPhone || doctor.contact_No);
      formData.append('password', doctor.updatedPassword || doctor.password);
      formData.append('status', doctor.updatedStatus || doctor.status);

      // Append the image file if it exists and has been updated
      if (doctor.updatedImageFile) {
        formData.append('imageFile', doctor.updatedImageFile);
      }

      await axios.put(`https://localhost:7123/api/Doctor/${doctor.doctor_Id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      fetchDoctors();
      setEditMode(null); // Exit edit mode after successful update
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  const handleDelete = async (doctor_Id) => {
    try {
      await axios.delete(`https://localhost:7123/api/Doctor/${doctor_Id}`);
      fetchDoctors();
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  const handleNameChange = (event, doctor_Id) => {
    const updatedDoctors = doctors.map((doctor) =>
      doctor.doctor_Id === doctor_Id ? { ...doctor, updatedName: event.target.value } : doctor
    );
    setDoctors(updatedDoctors);
  };

  const handleSpecializationChange = (event, doctor_Id) => {
    const updatedDoctors = doctors.map((doctor) =>
      doctor.doctor_Id === doctor_Id ? { ...doctor, updatedSpecialization: event.target.value } : doctor
    );
    setDoctors(updatedDoctors);
  };

  const handleEmailChange = (event, doctor_Id) => {
    const updatedDoctors = doctors.map((doctor) =>
      doctor.doctor_Id === doctor_Id ? { ...doctor, updatedEmail: event.target.value } : doctor
    );
    setDoctors(updatedDoctors);
  };

  const handlePhoneChange = (event, doctor_Id) => {
    const updatedDoctors = doctors.map((doctor) =>
      doctor.doctor_Id === doctor_Id ? { ...doctor, updatedPhone: event.target.value } : doctor
    );
    setDoctors(updatedDoctors);
  };

  const handlePasswordChange = (event, doctor_Id) => {
    const updatedDoctors = doctors.map((doctor) =>
      doctor.doctor_Id === doctor_Id ? { ...doctor, updatedPassword: event.target.value } : doctor
    );
    setDoctors(updatedDoctors);
  };

  const handleStatusChange = (event, doctor_Id) => {
    const updatedDoctors = doctors.map((doctor) =>
      doctor.doctor_Id === doctor_Id ? { ...doctor, updatedStatus: event.target.value } : doctor
    );
    setDoctors(updatedDoctors);
  };

  const handleImageChange = (event, doctor_Id) => {
    const updatedDoctors = doctors.map((doctor) =>
      doctor.doctor_Id === doctor_Id ? { ...doctor, updatedImageFile: event.target.files[0] } : doctor
    );
    setDoctors(updatedDoctors);
  };

  return (
    <div>
      <div><Navpatient/></div>
      <div className="cont">
        {doctors.map((doctor) => (
          <div key={doctor.doctor_Id} className="doctor-card">
            <div className="doc-image">
              {doctor.imageData && convertToImage(doctor.imageData)}
            </div>
            {editMode === doctor.doctor_Id ? (
              <div className="doc-details">
                <h2>
                  <input
                    type="text"
                    value={doctor.updatedName || doctor.doctor_Name}
                    onChange={(event) => handleNameChange(event, doctor.doctor_Id)}
                  />
                </h2>
                <p>
                  <input
                    type="text"
                    value={doctor.updatedSpecialization || doctor.specialization}
                    onChange={(event) => handleSpecializationChange(event, doctor.doctor_Id)}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    value={doctor.updatedEmail || doctor.doctor_Email}
                    onChange={(event) => handleEmailChange(event, doctor.doctor_Id)}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    value={doctor.updatedPhone || doctor.contact_No}
                    onChange={(event) => handlePhoneChange(event, doctor.doctor_Id)}
                  />
                </p>
                <p>
                  <input
                    type="password"
                    value={doctor.updatedPassword || doctor.password}
                    onChange={(event) => handlePasswordChange(event, doctor.doctor_Id)}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    value={doctor.updatedStatus || doctor.status}
                    onChange={(event) => handleStatusChange(event, doctor.doctor_Id)}
                  />
                </p>
                <p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => handleImageChange(event, doctor.doctor_Id)}
                  />
                </p>
               
              </div>
            ) : (
              <div className="doc-details">
                 <p><b>Doctor_ID:</b>{doctor.doctor_Id}</p>
                <p><b>Doctor_Name :</b>{doctor.doctor_Name}</p>
                <p><b>Specialization :</b>{doctor.specialization}</p>
                <p><b>Email:</b>{doctor.doctor_Email}</p>
                <p><b>Contact_No :</b>{doctor.contact_No}</p>

                <button className="btn btn-primary book-appointment-button" onClick={handleBookAppointment}>
        Book Appointment
      </button>
                {/* Render other doctor details */}
             
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}