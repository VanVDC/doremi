import React, { useState, useEffect } from 'react'
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
            Truong Nhac-Doremi Music Lessons
          </h2>
          <button classes='btn btn-primary rounded-0 mr-2'>English</button>
          <button classes='btn btn-light text-dark rounded-0'>
            Tiếng Việt
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main
