import { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

function Employees({ employees, fetchEmployees }) {
  const headings = [
    'ID',
    'Name',
    'Email',
    'Department',
    'Designation',
    'Date of joining'
  ]

  useEffect(() => {
    fetchEmployees()
  }, [])

  const deleteEmployee = async (employeedId) => {
    try {
      const employeesRef = doc(db, "employees", employeedId)
      await deleteDoc(employeesRef)
      fetchEmployees()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <h2 className='display-6 mt-5'>Employees List</h2>
      <Table responsive>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
               <td className='fw-medium'>{employee.id.toUpperCase()}</td>
               <td>{employee.name}</td>
               <td>{employee.email}</td>
               <td>{employee.department}</td>
               <td>{employee.designation}</td>
               <td>{employee.dateOfJoining}</td>
               <td>
                <Button 
                  variant="danger"
                  className='btn-sm'
                  onClick={() => deleteEmployee(employee.id)}
                >Delete</Button>
               </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Employees;