import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './config/firebase'
import Employees from './components/Employees'
import AddNew from './components/AddNew'

function App() {
  const [employees, setEmployees] = useState([])
  const fetchEmployees = async () => {
    try {
      const employeesRef = collection(db, "employees")
      const employeesSnapshot = await getDocs(employeesRef)
      const mappedData = employeesSnapshot.docs.map(employee => ({
        id: employee.id,
        ...employee.data()
      }))
      setEmployees(mappedData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className='mt-5 text-center'>
      <h1 className='display-3'>HR Management System</h1>
      <Employees
        employees={employees}
        fetchEmployees={fetchEmployees}
      />
      <AddNew fetchEmployees={fetchEmployees} />
    </Container>
  )
}

export default App
