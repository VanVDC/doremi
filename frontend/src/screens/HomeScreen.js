import React, { useState } from 'react'
import About from '../components/HomeComponents/About'
import Main from '../components/HomeComponents/Main'
import Services from '../components/HomeComponents/Services'
import Map from '../components/HomeComponents/Map'
import ImageCarousel from '../components/HomeComponents/ImageCarousel'
import YotubeCarousel from '../components/HomeComponents/YoutubeCarousel'
import Fact from '../components/HomeComponents/Fact'
import Contact from '../components/HomeComponents/Contact'
import HomeFooter from '../components/HomeComponents/HomeFooter'
import Footer from '../components/HomeComponents/Footer'
import Meta from '../components/Meta'

const HomeScreen = () => {
  let init = JSON.parse(localStorage.getItem('lang'))

  let [lan, setLan] = useState(init)

  return (
    <div>
      <Meta />

      <Main lan={setLan} />
      <About lan={lan} />
      <Services lan={lan} />
      <ImageCarousel />
      <Fact lan={lan} />
      <YotubeCarousel />
      <Contact lan={lan} />
      <Map />
      <HomeFooter />
      <Footer />
    </div>
  )
}

export default HomeScreen
