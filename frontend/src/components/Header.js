import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
// import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import logo from '../assets/img/logo.svg'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg='dark-50' variant='dark-50' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                alt='logo'
                src={logo}
                width='100px'
                height='50px'
                className='d-inline-block align-top'
              />{' '}
              {/* <i className='fas fa-music'></i> Doremi */}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          {userInfo ? (
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <LinkContainer to='/students'>
                  <Nav.Link>
                    {' '}
                    <i className='fas fa-users'></i> Students
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/'>
                  <Nav.Link onClick={logoutHandler}>
                    <i className='fas fa-user'></i> Sign Out
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
