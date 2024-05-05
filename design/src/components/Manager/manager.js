import React from "react";
import Nav_manager from "./manager_nav";
import { useParams } from "react-router-dom";
import SearchFilter from "./searchFilter";
import AllStudents from "./table_std";
import '../../style/Style_manager/mainManager.css';
import AddManager from "./provaNav";
import Header from "./header";
const ManagerPage = () => {


  const { id } = useParams(); // Get managerId from route params
   console.log("ardisa",id);
  return (
    
    <div className="allManager">
    {/* <Nav_manager/>
    <SearchFilter/>

     <AllStudents managerId={id}/> */}
       
     <AddManager/>;
     <Header/>;
    <AllStudents managerId={id}/>
    </div>
  );
};

export default ManagerPage;
