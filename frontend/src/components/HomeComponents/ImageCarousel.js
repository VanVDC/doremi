import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { imageData } from '../../data/data'

const ImageCarousel = () => {
  return (
    <Carousel pause='hover' className='bg-dark text-center'>
      {imageData.map((image) => (
        <Carousel.Item>
          <Image
            className=' w-50'
            src={`https://scontent.fatl1-2.fna.fbcdn.net/v/${image}`}
            fluid
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ImageCarousel
