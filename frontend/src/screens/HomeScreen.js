import React, { useState, useEffect } from 'react'
import About from '../components/HomeComponents/About'
import Main from '../components/HomeComponents/Main'
import Services from '../components/HomeComponents/Services'
import Map from '../components/HomeComponents/Map'
import ImageCarousel from '../components/HomeComponents/ImageCarousel'
import YotubeCarousel from '../components/HomeComponents/YoutubeCarousel'
import Fact from '../components/HomeComponents/Fact'
import Contact from '../components/HomeComponents/Contact'
import HomeFooter from '../components/HomeComponents/HomeFooter'

const HomeScreen = () => {
  let init = JSON.parse(localStorage.getItem('lang'))

  let [lan, setLan] = useState(init)

  return (
    <div>
      <Main lan={setLan} />
      <About lan={lan} />
      <Services lan={lan} />
      <ImageCarousel />
      <YotubeCarousel />
      <Fact lan={lan} />
      <Contact lan={lan} />
      <Map />
      <HomeFooter />
    </div>
  )
}

export default HomeScreen
