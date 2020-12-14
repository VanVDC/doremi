import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import StudentsScreen from './screens/StudentsScreen'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
      <main className='pt-0'>
        <Container>
          <Route path='/product/:id' component={StudentsScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
