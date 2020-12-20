import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submiteHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
    <Form onSubmit={submiteHandler} inline style={{ marginRight: 20 }}>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-1 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-light' className='p-1'>
        <i className='fab fa-searchengin fa-1.2x'></i>
      </Button>
    </Form>
  )
}

export default SearchBox
