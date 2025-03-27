import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import {
  collection,
  addDoc
} from 'firebase/firestore'
import { db } from '../config/firebase'

function AddNew({ fetchEmployees }) {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const defaultDetails = {
    name: '',
    email: '',
    department: '',
    designation: '',
    dateOfJoining: '',
  }
  const [newEmployee, setNewEmployee] = useState(defaultDetails)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    try {
      const employeesRef = collection(db, "employees")
      await addDoc(employeesRef, newEmployee)
      setShowAlert(true)
      fetchEmployees()
    } catch(error) {
      console.log(error)
    }

    handleClose()
    setNewEmployee(defaultDetails)
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add new employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="John Doe"
              value={newEmployee.name}
              onInput={(e) => setNewEmployee({
                ...newEmployee,
                name: e.target.value
              })}  
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="john.doe@gmail.com" 
              value={newEmployee.email}
              onInput={(e) => setNewEmployee({
                ...newEmployee,
                email: e.target.value
              })}  
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Finance" 
              value={newEmployee.department}
              onInput={(e) => setNewEmployee({
                ...newEmployee,
                department: e.target.value
              })}  
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="CA" 
              value={newEmployee.designation}
              onInput={(e) => setNewEmployee({
                ...newEmployee,
                designation: e.target.value
              })}  
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date of joining</Form.Label>
            <Form.Control 
              type="date" 
              value={newEmployee.dateOfJoining}
              onInput={(e) => setNewEmployee({
                ...newEmployee,
                dateOfJoining: e.target.value
              })}  
            />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleSubmit}>
            Add employee
          </Button>
        </Modal.Footer>
      </Modal>
      {showAlert && (
        <Alert 
          className='w-50'
          variant="success" 
          onClose={() => setShowAlert(false)} 
          dismissible
          style={{
            position: 'absolute',
            top: '1em',
            right: '1em'
          }}
        >
          <Alert.Heading>Success!</Alert.Heading>
          <p>
            Employee successfully added ✅
          </p>
        </Alert>
      )}
    </>
  );
}

export default AddNew;