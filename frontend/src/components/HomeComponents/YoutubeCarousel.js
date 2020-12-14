import React from 'react'
import { Card, CardColumns, Carousel } from 'react-bootstrap'
import ReactPlayer from 'react-player'

const YoutubeCarousel = () => {
  const videos = [
    'QT8TkdmG0Yo',
    'S0N1k47hLUI',
    'JgVfdksHHFI',
    '4QoJTP5kdw4',
    'YuzyxKmyqyk',
    'VKiN-M_pWms',
    'eiPNcD-TiVw',
    'TcerHHfgVfM',
    'QUwUZMk0UQc',
  ]
  return (
    <div className='d-flex justify-content-center m-3'>
      <Carousel pause='hover'>
        {videos.map((video) => (
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
