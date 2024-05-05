// import React, { useState, useEffect } from "react";

// const ManagersList = () => {
//   const [managers, setManagers] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchManagers = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/coordinators/list");
//         if (!response.ok) {
//           throw new Error("Failed to fetch managers");
//         }
//         const data = await response.json();
//         setManagers(data);
//       } catch (error) {
//         setError("Error fetching managers. Please try again.");
//       }
//     };
//     fetchManagers();
//   }, []);

//   return (
//     <div>
//       <h2>Manager List</h2>
//       {error && <div className="error">{error}</div>}
//       <ul>
//         {managers.map((managerData) => (
//           <li key={managerData.manager.id}>
//             {managerData.manager && (
//               <div>
//                 <div>Name: {managerData.manager.name}</div>
//                 <div>Surname: {managerData.manager.surname}</div>
//                 <div>Username: {managerData.manager.username}</div>
//                 <div>Email: {managerData.manager.email}</div>
//                 <div>Phone: {managerData.manager.phone}</div>
//               </div>
//             )}
//             {managerData.building && (
//               <div>Building: {managerData.building.name}</div>
//             )}
//             <div>Number of Students: {managerData.numberOfStudents}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ManagersList;


import React, { useState, useEffect } from "react";
import Column from "./Column";

const ManagersList = () => {
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
      <h2>Manager List</h2>
      {error && <div className="error">{error}</div>}
      <div>
        {managers.map((managerData) => (
          <div key={managerData.manager.id}>
            <Column
              headerTitle="Name"
              link={managerData.manager.name}
            />
            <Column
              headerTitle="Surname"
              link={managerData.manager.surname}
            />
            <Column
              headerTitle="Username"
              link={managerData.manager.username}
            />
            <Column
              headerTitle="Email"
              link={managerData.manager.email}
            />
            <Column
              headerTitle="Phone"
              link={managerData.manager.phone}
            />
            <Column
              headerTitle="Building"
              link={managerData.building ? managerData.building.name : ""}
            />
            <Column
              headerTitle="Number of Students"
              link={managerData.numberOfStudents.toString()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagersList;
