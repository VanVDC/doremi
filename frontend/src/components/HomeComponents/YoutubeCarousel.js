import React from 'react'
import { Card, CardColumns } from 'react-bootstrap'
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
    <CardColumns className='bg-light p-3'>
      {videos.map((video) => (
        <Card className='text-center p-3'>
          <Card.Body>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video}`}
              muted={false}
              controls={true}
              volume={0.3}
              width={'400px'}
              height={'200px'}
            />
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  )
}

export default YoutubeCarousel
