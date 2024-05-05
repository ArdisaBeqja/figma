import React, {useState,useEffect}from 'react';

function StudentList({managerId}){
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
        <div>
            <h2>Studens</h2>
            <ul>
                {students.map(student=>(
                    <li key={student.id}>
                          <p>Name: {student.name}</p>
                          <p>Surname: {student.surname}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default StudentList;