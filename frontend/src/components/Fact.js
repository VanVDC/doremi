import React from 'react'
import bgImage from '../assets/img/facts_bg.jpg'

const Fact = ({ lan }) => {
  return (
    <div
      className='facts-container'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='container pt-5 pb-4'>
        <div className='row'>
          <div className='col-sm-6 col-md-3 text-center mb-4'>
            <div className='mb-2 facts-icon'>
              <i className='fas fa-users' />
            </div>
            <h4 className='facts-counter text-light'>170</h4>
            <h5 className='facts-title text-light'>
              {lan ? 'HỌC SINH HOẠT ĐỘNG' : 'Active students'}
            </h5>
          </div>
          <div className='col-sm-6 col-md-3 text-center mb-4'>
            <div className='mb-2 facts-icon'>
              <i className='fas fa-grin-beam' />
            </div>
            <h4 className='facts-counter text-light'>500+</h4>
            <h5 className='facts-title text-light'>Alumni</h5>
          </div>
          <div className='col-sm-6 col-md-3 text-center mb-4'>
            <div className='mb-2 facts-icon'>
              <i className='fas fa-glass-cheers' />
            </div>
            <h4 className='facts-counter text-light'>10</h4>
            <h5 className='facts-title text-light'>
              {lan ? 'NĂM KINH DOANH' : 'Years in Business'}
            </h5>
          </div>
          <div className='col-sm-6 col-md-3 text-center mb-4'>
            <div className='mb-2 facts-icon'>
              <i className='fas fa-school' />
            </div>
            <h4 className='facts-counter text-light'>2</h4>
            <h5 className='facts-title text-light'>
              {lan ? 'Nơi' : 'Locations'}
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fact
