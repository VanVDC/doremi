import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import StudentsScreen from './screens/StudentsScreen'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
      <main className='pt-0'>
        <Container>
          <Route path='/students' component={StudentsScreen} />
        </Container>
      </main>
    </Router>
  )
}

export default App
