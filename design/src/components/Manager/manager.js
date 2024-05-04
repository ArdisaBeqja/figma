import React from "react";
import Nav_manager from "./manager_nav";
import { useParams } from "react-router-dom";
import SearchFilter from "./searchFilter";
const ManagerPage = () => {
  const { id } = useParams(); // Get managerId from route params
   console.log("ardisa",id);
  return (
    
    <div>
    <Nav_manager/>
    {/* <StudentList managerId={id} /> Pass managerId as prop */}
    <SearchFilter/>
     {/* <Std/> */}
   
    </div>
  );
};

export default ManagerPage;
