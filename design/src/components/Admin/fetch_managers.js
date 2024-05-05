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

import '../../style/Style_admin/tableManagers.css';
import '../../style/Style_admin/rectangle.css'


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
    <div className="ManagersTable">
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Building</th>
            <th>Number of Students</th>
          </tr>
        </thead>
        <tbody>
          {managers.map((managerData) => (
            <tr key={managerData.manager.id}>
              <td>{managerData.manager.name}</td>
              <td>{managerData.manager.surname}</td>
              <td>{managerData.manager.email}</td>
              <td>{managerData.manager.phone}</td>
              <td>{managerData.building ? managerData.building.name : ""}</td>
              <td>{managerData.numberOfStudents}</td>
            </tr>
            ))}
        </tbody>
    </table>
</div>
);
}
export default ManagersList;



















// import React, { useState, useEffect } from "react";
// import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from "@nextui-org/react";

// const statusColorMap = {
//   active: "success",
//   paused: "danger",
//   vacation: "warning",
// };

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

//   const renderCell = (manager, columnKey) => {
//     const cellValue = manager[columnKey];

//     switch (columnKey) {
//       case "name":
//         return (
//           <User
//             avatarProps={{ radius: "lg", src: manager.avatar }}
//             description={manager.email}
//             name={cellValue}
//           >
//             {manager.email}
//           </User>
//         );
//       case "role":
//         return (
//           <div className="flex flex-col">
//             <p className="text-bold text-sm capitalize">{cellValue}</p>
//             <p className="text-bold text-sm capitalize text-default-400">{manager.team}</p>
//           </div>
//         );
//       case "status":
//         return (
//           <Chip className="capitalize" color={statusColorMap[manager.status]} size="sm" variant="flat">
//             {cellValue}
//           </Chip>
//         );
//       case "actions":
//         return (
//           <div className="relative flex items-center gap-2">
//             <Tooltip content="Details">
//               <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
//                 {/* Assuming EyeIcon, EditIcon, and DeleteIcon are available */}
//                 <EyeIcon />
//               </span>
//             </Tooltip>
//             <Tooltip content="Edit user">
//               <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
//                 <EditIcon />
//               </span>
//             </Tooltip>
//             <Tooltip color="danger" content="Delete user">
//               <span className="text-lg text-danger cursor-pointer active:opacity-50">
//                 <DeleteIcon />
//               </span>
//             </Tooltip>
//           </div>
//         );
//       default:
//         return cellValue;
//     }
//   };

//   return (
//     <Table aria-label="Manager List">
//       <TableHeader>
//         {columns.map((column) => (
//           <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
//             {column.name}
//           </TableColumn>
//         ))}
//       </TableHeader>
//       <TableBody>
//         {managers.map((manager) => (
//           <TableRow key={manager.id}>
//             {columns.map((column) => (
//               <TableCell key={column.uid}>{renderCell(manager, column.uid)}</TableCell>
//             ))}
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };

// export default ManagersList;
