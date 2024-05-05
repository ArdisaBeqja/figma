import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div>
      <h1>Student Page</h1>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default StudentPage;
