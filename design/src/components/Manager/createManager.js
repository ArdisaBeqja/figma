import React, { useState } from 'react';
import axios from 'axios';

const CreateManagerForm = () => {
  const [managerData, setManagerData] = useState({
    username: '',
    password: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    buildingID: '', // Make sure this matches the field in your Manager model
  });

  const handleChange = (e) => {
    setManagerData({ ...managerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post('http://localhost:8080/api/manager/add', managerData);

      // Reset the form after successful submission
      setManagerData({
        username: '',
        password: '',
        name: '',
        surname: '',
        email: '',
        phone: '',
        buildingID: '',
      });
      // Handle success, e.g., display a success message
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={managerData.username} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={managerData.password} onChange={handleChange} />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={managerData.name} onChange={handleChange} />
      </label>
      <label>
        Surname:
        <input type="text" name="surname" value={managerData.surname} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={managerData.email} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={managerData.phone} onChange={handleChange} />
      </label>
      <label>
        Building ID:
        <input type="text" name="buildingID" value={managerData.buildingID} onChange={handleChange} />
      </label>
      <button type="submit">Create Manager</button>
    </form>
  );
};

export default CreateManagerForm;
