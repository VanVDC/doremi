import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/img/logo.svg'

const Header = () => {
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
                height='60px'
                className='d-inline-block align-top'
              />{' '}
              {/* <i className='fas fa-music'></i> Doremi */}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/students'>
                <Nav.Link>
                  {' '}
                  <i className='fas fa-users'></i> Students
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
