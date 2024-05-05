import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ManagerPage from "../components/Manager/manager";
import Auth from "../components/Auth/Auth";
import AdminPage from "../components/Admin/admin";
import StudentPage from "../components/Student/student";

function Root() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <button onClick={() => navigate(-1)}>go back</button> */}
      <Routes>
        <Route path="/" element={<Auth />} />
        {/* <Route path="/manager/:id" element={<ManagerPage />} /> */}
        <Route path="/admin/:id" element={<AdminPage />} />
        <Route path ="/student/:id" element={<StudentPage/>}/>

       
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;
