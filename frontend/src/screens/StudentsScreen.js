import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Col, Row } from 'react-bootstrap'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'

import {
  createStudent,
  deleteStudent,
  listStudents,
} from '../actions/studentActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import SearchBox from '../components/SearchBox'
import { STUDENT_CREATE_RESET } from '../constants/studentConstants'

const StudentsScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const keyword = match.params.keyword

  const dispatch = useDispatch()
  const studentList = useSelector((state) => state.studentList)
  const { loading, error, students, page, pages } = studentList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const studentDelete = useSelector((state) => state.studentDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = studentDelete

  const studentCreate = useSelector((state) => state.studentCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    succes: successCreate,
    student: createdStudent,
  } = studentCreate

  useEffect(() => {
    dispatch({ type: STUDENT_CREATE_RESET })
    if (!userInfo) {
      history.push('/login')
    }
    if (successCreate) {
      history.push(`/student/${createdStudent._id}/edit`)
    } else {
      dispatch(listStudents(keyword, pageNumber))
    }
  }, [
    dispatch,
    history,
    successDelete,
    createdStudent,
    successCreate,
    userInfo,
    keyword,
    pageNumber,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteStudent(id))
    }
  }
  const createStudentHandler = () => {
    dispatch(createStudent())
  }

  return (
    <>
      <Meta title={'Students'} />

      <Row className='align-items-center'>
        <Col>
          <h1>Students</h1>
        </Col>
        <Col className='my-3 text-center'>
          <Route
            className='my-3'
            render={({ history }) => <SearchBox history={history} />}
          />
        </Col>
        {!keyword ? (
          <Col className='text-right'>
            <Button className='my-3' onClick={createStudentHandler}>
              <i className='fas fa-plus'></i> Create Student
            </Button>
          </Col>
        ) : (
          <Col></Col>
        )}
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>Active</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>GENDER</th>
                <th>CLASS DAY</th>
                <th>CLASS TIME</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td>
                    {student.isActive ? (
                      <div className='text-success text-center'>Active</div>
                    ) : (
                      <div className='text-danger text-center'>Inactive</div>
                    )}
                  </td>
                  <td>
                    {student.lastName.toUpperCase()}, {student.firstName}
                  </td>
                  <td>
                    <a href={`mailto:${student.email}`}>{student.email}</a>
                  </td>
                  <td>{student.gender}</td>
                  <td>{student.classDay.toUpperCase()}</td>
                  <td>{student.classTime}</td>

                  <td>
                    {' '}
                    <LinkContainer to={`/student/${student._id}/edit`}>
                      <Button variant='light ' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                  </td>
                  <td>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(student._id)}
                    >
                      <i className='fas fa-trash '></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} />
        </>
      )}
    </>
  )
}

export default StudentsScreen
