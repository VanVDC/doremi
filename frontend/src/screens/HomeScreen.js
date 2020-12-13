import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import About from '../components/About'
import Main from '../components/Main'
import Map from '../components/Map'
import Fact from '../components/Fact'
import Contact from '../components/Contact'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <Main />
      <About />
      <Fact />
      <Contact />
      <Map />
    </div>
  )
}

export default HomeScreen
