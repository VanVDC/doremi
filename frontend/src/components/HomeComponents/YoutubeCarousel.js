import React from 'react'
import { Carousel } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { youtubeData } from '../../data/data'

const YoutubeCarousel = () => {
  return (
    <div className='d-flex justify-content-center m-3'>
      <Carousel pause='hover'>
        {youtubeData.map((video) => (
          <Carousel.Item>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video}`}
              muted={false}
              controls={true}
              volume={0.3}
              width={'500px'}
              height={'300px'}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default YoutubeCarousel
