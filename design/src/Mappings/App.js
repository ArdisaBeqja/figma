import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ManagerPage from "../components/Manager/manager";
import Auth from "../components/Auth/Auth";

function Root() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>go back</button>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/manager/:id" element={<ManagerPage />} />

       
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
