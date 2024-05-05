import React, { useState, useEffect } from "react";
import ManagersList from "./fetch_managers";

import '../../style/Style_manager/mainManager.css';
import AddManagerAdmin from "./provaNavAdmin";
import Header from "./headerAdmin";

//import  "../../style/Style_admin/global.css";

//all the functions of the admin - here
const AdminPage = () => {
  const [managers, setManagers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchManagers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/coordinators/list");
        if (!response.ok) {
          throw new Error("Failed to fetch managers");
        }
        const data = await response.json();
        setManagers(data);
      } catch (error) {
        setError("Error fetching managers. Please try again.");
      }
    };
    fetchManagers();
  }, []);

  return (
    <div>
      <AddManagerAdmin/>;
     <Header/>;

      {error && <div className="error">{error}</div>}
      <ManagersList managers={managers} />
    
    </div>
  );
};

export default AdminPage;
