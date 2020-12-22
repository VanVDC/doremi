import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Col, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listStudentDetail, updateStudent } from '../actions/studentActions'
import { STUDENT_UPDATE_RESET } from '../constants/studentConstants'
import Meta from '../components/Meta'

const StudentEditScreen = ({ match, history }) => {
  const studentId = match.params.id

  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDOB] = useState('')
  const [gender, setGender] = useState('')
  const [parent, setParent] = useState('')
  const [instrument, setInstrument] = useState('')
  const [setAmount, setSetAmount] = useState(0)
  const [classDay, setClassDay] = useState('')
  const [classTime, setClassTime] = useState('')
  const [teacher, setTeacher] = useState('')
  const [knowAboutUs, setKnowAboutUs] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [isActive, setActive] = useState(null)

  const dispatch = useDispatch()

  const studentDetails = useSelector((state) => state.studentDetails)
  const { loading, error, student } = studentDetails

  const studentUpdate = useSelector((state) => state.studentUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = studentUpdate
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: STUDENT_UPDATE_RESET })
      history.push('/students')
    } else {
      if (!student.firstName || student._id !== studentId) {
        dispatch(listStudentDetail(studentId))
      } else {
        setLastName(student.lastName)
        setFirstName(student.firstName)
        setEmail(student.email)
        setPhone(student.phone)
        setDOB(student.dob)
        setGender(student.gender)
        setParent(student.parent)
        setInstrument(student.instrument)
        setSetAmount(student.setAmount)
        setClassDay(student.classDay)
        setClassTime(student.classTime)
        setTeacher(student.teacher)
        setKnowAboutUs(student.knowAboutUs)
        setStreet(student.address.street)
        setCity(student.address.city)
        setState(student.address.state)
        setPostalCode(student.address.postalCode)
        setActive(student.isActive)
      }
    }
  }, [dispatch, history, student, studentId, successUpdate])

  const activeHandler = () => {
    setActive(!isActive)
    console.log('inside handler ', isActive)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('inside submit ', isActive)

    dispatch(
      updateStudent({
        _id: studentId,
        lastName,
        firstName,
        email,
        phone,
        dob,
        parent,
        instrument,
        setAmount,
        classDay,
        classTime,
        teacher,
        knowAboutUs,
        gender,
        isActive,
        address: {
          street,
          city,
          state,
          postalCode,
        },
      })
    )
  }

  return (
    <>
      <Meta title={`Edit ${firstName} ${lastName}`} />

      <Link to='/students' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Student</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Label className='bg-dark text-light px-3' variant='light'>
              Student Information
            </Form.Label>
            <Form.Row>
              <Col>
                <Form.Group controlId='lastName'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter last name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='firstName'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter first name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col xs={3}>
                <Form.Group controlId='gender'>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter gender'
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='dob'>
                  <Form.Label>DOB</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter dob'
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Group controlId='email'>
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group controlId='phone'>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col xs={3}>
                <Form.Group controlId='parent'>
                  <Form.Label>Parent</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter parent'
                    value={parent}
                    onChange={(e) => setParent(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Label className='bg-dark text-light px-3' variant='light'>
                Address
              </Form.Label>
            </Form.Group>
            <Form.Row>
              <Col xs={4}>
                <Form.Group controlId='street'>
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter street'
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='city'>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Form.Group controlId='state'>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter State'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col xs={3}>
                <Form.Group controlId='postalCode'>
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter postal code'
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Label className='bg-dark text-light px-3' variant='light'>
              Class Information
            </Form.Label>
            <Form.Row>
              <Col xs={3}>
                <Form.Group controlId='classDay'>
                  <Form.Label>Class Day</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter class day'
                    value={classDay}
                    onChange={(e) => setClassDay(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col xs={3}>
                <Form.Group controlId='classTime'>
                  <Form.Label>Class Time</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter class time'
                    value={classTime}
                    onChange={(e) => setClassTime(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='teacher'>
                  <Form.Label>Teacher</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter teacher'
                    value={teacher}
                    onChange={(e) => setTeacher(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='instrument'>
                  <Form.Label>Instrument</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter instrument'
                    value={instrument}
                    onChange={(e) => setInstrument(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Label className='bg-dark text-light px-3' variant='light'>
              Others{' '}
            </Form.Label>

            <Form.Group controlId='setAmount'>
              <Form.Label>Set Amount</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter monthly amount'
                value={setAmount}
                onChange={(e) => setSetAmount(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='knowAboutUs'>
              <Form.Label>Know About Us</Form.Label>
              <Form.Control
                type='text'
                placeholder='How did student the find out about us'
                value={knowAboutUs}
                onChange={(e) => setKnowAboutUs(e.target.value)}
              ></Form.Control>
              <ListGroup.Item className='mt-3'>
                {isActive ? (
                  <Button
                    type='button'
                    className='btn btn-block bg-success'
                    onClick={activeHandler}
                  >
                    Currently Active
                  </Button>
                ) : (
                  <Button
                    type='button'
                    className='btn btn-block bg-danger'
                    onClick={activeHandler}
                  >
                    Currently Inactive
                  </Button>
                )}
              </ListGroup.Item>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}
export default StudentEditScreen
