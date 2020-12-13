import React, { useState, useEffect } from 'react'
import bgImage from '../../assets/img/home_bg.jpg'

const Main = ({ lan }) => {
  const initialBool = JSON.parse(localStorage.getItem('lang')) || false
  let [viet, setViet] = useState(initialBool)

  useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(viet))
    lan(viet)
  }, [viet])

  const onToggle = () => {
    setViet(!viet)
  }

  return (
    <div id='home'>
      <div
        className='home-content p-5'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='intro container text-center text-light'>
          <h1 className='title text-light'>{viet ? 'CHÀO MỪNG' : 'WELCOME'}</h1>
          <h2 className='sub-title mb-4 text-light'>
            Truong Nhac-Doremi Music Lessons
          </h2>
          {viet ? (
            <button
              onClick={onToggle}
              classes='btn btn-light text-dark rounded-0'
            >
              English
            </button>
          ) : (
            <button onClick={onToggle} classes='btn btn-primary rounded-0 mr-2'>
              Tiếng Việt{' '}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Main
