import React, { useState, useEffect } from 'react'
import About from '../components/About'
import Main from '../components/Main'
import Map from '../components/Map'
import Fact from '../components/Fact'
import Contact from '../components/Contact'
import HomeFooter from '../components/HomeFooter'

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
      <HomeFooter />
    </div>
  )
}

export default HomeScreen
