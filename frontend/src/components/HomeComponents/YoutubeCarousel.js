import React from 'react'
import { Carousel } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { youtubeData } from '../../data/data'

const YoutubeCarousel = () => {
  return (
    <div className=' d-flex justify-content-center bg-dark'>
      <Carousel pause='hover' interval={10000}>
        {youtubeData.map((video, i) => (
          <Carousel.Item key={i}>
            <ReactPlayer
              url={video}
              muted={false}
              controls={true}
              volume={0.3}
              width={'750px'}
              height={'400px'}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default YoutubeCarousel
