import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CreateStudentForm = () => {
  const { managerId } = useParams();
  const [studentData, setStudentData] = useState({
    username: '',
    password: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    buildingId: '',
    roomId: '',
    contractId: '',
  });

  useEffect(() => {
    // Fetch manager data or perform any other necessary actions
    // You can use managerId here to fetch manager-specific data if needed
  }, [managerId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/v1/students/create/${managerId}`, studentData);
      // Handle success, redirect or show a success message
    } catch (error) {
      // Handle error
    }
  };

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={studentData.username} onChange={handleChange} />
      </label><br/>
      <label>
        Password:
        <input type="password" name="password" value={studentData.password} onChange={handleChange} />
      </label><br/>
      <label>
        Name:
        <input type="text" name="name" value={studentData.name} onChange={handleChange} />
      </label><br/>
      <label>
        Surname:
        <input type="text" name="surname" value={studentData.surname} onChange={handleChange} />
      </label><br/>
      <label>
        Email:
        <input type="email" name="email" value={studentData.email} onChange={handleChange} />
      </label><br/>
      <label>
        Phone:
        <input type="tel" name="phone" value={studentData.phone} onChange={handleChange} />
      </label><br/>
      
      <label>
        Room ID:
        <input type="text" name="roomId" value={studentData.roomId} onChange={handleChange} />
      </label><br/>
      <label>
        Contract ID:
        <input type="text" name="contractId" value={studentData.contractId} onChange={handleChange} />
      </label><br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateStudentForm;
