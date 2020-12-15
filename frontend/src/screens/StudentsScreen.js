import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'

import { listStudents } from '../actions/studentActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const StudentsScreen = () => {
  const dispatch = useDispatch()
  const studentList = useSelector((state) => state.studentList)
  const { loading, error, students } = studentList

  useEffect(() => {
    dispatch(listStudents())
  }, [dispatch])

  // const deleteHandler = (id) => {
  //   if (window.confirm('Are you sure?')) {
  //     dispatch(deleteUser(id))
  //   }
  // }

  return (
    <>
      <h1>Students</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
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
                <td>{student._id}</td>
                <td>
                  {student.lastName}, {student.firstName}
                </td>
                <td>
                  <a href={`mailto:${student.email}`}>{student.email}</a>
                </td>
                <td>{student.gender}</td>
                <td>{student.classDay}</td>
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
                    // onClick={() => deleteHandler(student._id)}
                  >
                    <i className='fas fa-trash '></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default StudentsScreen
