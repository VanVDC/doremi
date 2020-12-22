import React from 'react'
import { Carousel } from 'react-bootstrap'
import { youtubeData } from '../../data/data'

const YoutubeCarousel = () => {
  return (
    <div className=' d-flex justify-content-center bg-dark'>
      <Carousel pause='hover' interval={10000}>
        {youtubeData.map((video, i) => (
          <Carousel.Item key={i}>
            <iframe
              src={video}
              width='750px'
              height='400px'
              allowFullScreen
              title={i}
            ></iframe>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default YoutubeCarousel
