import React from 'react'
import bgImage from '../assets/img/home_bg.jpg'

const Main = () => {
  return (
    <div id='home'>
      <div
        className='home-content p-5'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='intro container text-center text-light'>
          <h1 className='title text-light'>WELCOME</h1>
          <h2 className='sub-title mb-4 text-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            laborum minus molestiae.
          </h2>
          {/* <Link target='about' classes='btn btn-primary rounded-0 mr-2'>
            Learn More
          </Link>
          <Link target='contact' classes='btn btn-light text-dark rounded-0'>
            Contact Us
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Main
