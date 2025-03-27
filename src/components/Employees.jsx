import { useState } from 'react'
import Table from 'react-bootstrap/Table';

function Employees() {
  const headings = [
    'ID',
    'Name',
    'Email',
    'Department',
    'Designation',
    'Date of joining'
  ]
  const [employees, setEmployees] = useState([
    {
      "id": 1,
      "name": "Apurva",
      "email": "apurva@gmail.com",
      "department": "Engineering",
      "designation": "SE",
      "dateOfJoining": "2025-02-14"
    },
    {
      "id": 2,
      "name": "Poornima",
      "email": "poornima@gmail.com",
      "department": "HR",
      "designation": "Senior HR",
      "dateOfJoining": "2025-02-01"
    }
  ])

  return (
    <div style={{ textAlign: 'left' }}>
      <h2 className='display-6 mt-5'>Employees List</h2>
      <Table responsive>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              {Object.values(employee).map((value, index2) => (
                <td key={index2}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Employees;