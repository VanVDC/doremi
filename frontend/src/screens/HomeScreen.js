import React, { useState, useEffect } from 'react'
import About from '../components/About'
import Main from '../components/Main'
import Map from '../components/Map'
import Fact from '../components/Fact'
import Contact from '../components/Contact'

const HomeScreen = () => {
  let init = JSON.parse(localStorage.getItem('lang'))

  let [lan, setLan] = useState(init)

  return (
    <div>
      <Main lan={setLan} />
      <About lan={lan} />
      <Fact lan={lan} />
      <Contact lan={lan} />
      <Map />
    </div>
  )
}

export default HomeScreen
