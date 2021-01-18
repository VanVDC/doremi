import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { imageData } from '../../data/data'
const ImageCarousel = () => {
  return (
    <Carousel pause='hover' className='bg-dark text-center'>
      {imageData.map((image, i) => (
        <Carousel.Item key={i}>
          <Image className='w-50' src={image} fluid />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ImageCarousel
