import React, {useState,useEffect}from 'react';
import '../../style/Style_manager/tableStd.css';
import editBtn from '../../images/editBtn.png';
import deleteBtn from '../../images/deleteBtn.png';

function AllStudents({managerId}){
    const [students, setStudents]=useState([]);
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/manager/${managerId}/getAllStd`);
               
                if (!response.ok) {
                    throw new Error('Failed to fetch students');
                }

                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error("Error fetching students", error);
            }
        };

        fetchStudents();
    }, [managerId]);
    

    return (
        <div className="StudentTable">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Room ID</th>
                    <th>Contract ID</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                    
                        <td>{student.surname}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>{student.roomId.details}</td>
                        <td>{student.contractId}</td>
                        <td>
                        <button><img src={editBtn} alt="Edit" /></button>
                        <button><img src={deleteBtn} alt="Edit" /></button>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default AllStudents;