import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import StudentsScreen from './screens/StudentsScreen'
import StudentEditScreen from './screens/StudentEditScreen'
import ProfileScreen from './screens/ProfileScreen'
import AddUserScreen from './screens/AddUserScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
      <main className='pt-0'>
        <Container>
          <Route path='/students' component={StudentsScreen} />
          <Route path='/student/:id/edit' component={StudentEditScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/admin/adduser' component={AddUserScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/search/:keyword' component={StudentsScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={StudentsScreen}
            exact
          />
        </Container>
      </main>
    </Router>
  )
}

export default App
