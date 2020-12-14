import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'

import { listStudents } from '../actions/studentActions'

const StudentsScreen = ({ match }) => {
  const dispatch = useDispatch()
  const studentList = useSelector((state) => state.studentList)
  const { loading, error, students } = studentList

  useEffect(() => {
    dispatch(listStudents)
  }, [dispatch])

  return (
    <>
      <h1>Users</h1>
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
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {' '}
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light ' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                </td>
                <Button
                  variant='danger'
                  className='btn-sm'
                  onClick={() => deleteHandler(user._id)}
                >
                  <i className='fas fa-trash'></i>
                </Button>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default StudentsScreen
