import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap'
import Employees from './components/Employees'
import AddNew from './components/AddNew'

function App() {
  return (
    <Container className='mt-5 text-center'>
      <h1 className='display-3'>HR Management System</h1>
      <Employees />
      <AddNew />
    </Container>
  )
}

export default App
